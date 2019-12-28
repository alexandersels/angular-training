import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {LogInFailureAction, LogInSuccessAction, SignupFailureAction, SignupSuccessAction} from './store/auth.actions';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable()
export class AuthService {
  private tokenExpirationTimer: any;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(email: string, password: string): Observable<LogInSuccessAction | LogInFailureAction> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`;
    return this.http.post<AuthResponseData>(url, {email, password, returnSecureToken: true})
      .pipe(
        map((authResponse: AuthResponseData) => {
          localStorage.setItem('token', authResponse.idToken);
          return new LogInSuccessAction({email: authResponse.email, id: authResponse.localId});
        }),
        catchError((error: HttpErrorResponse) => {
          return of(new LogInFailureAction(this.getDescriptiveError(error)));
        })
      );
  }

  signup(email: string, password: string): Observable<SignupSuccessAction | SignupFailureAction> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
    return this.http.post<AuthResponseData>(url, {email, password, returnSecureToken: true})
      .pipe(
        map((authResonse: AuthResponseData) => {
          localStorage.setItem('token', authResonse.idToken);
          return new SignupSuccessAction({email: authResonse.email, id: authResonse.idToken});
        }),
        catchError((error: HttpErrorResponse) => {
          return of(new SignupFailureAction(this.getDescriptiveError(error)));
        })
      );
  }

  logout(): void {
    // // this.user$.next(null);
    // this.router.navigate(['/auth']);
    // localStorage.removeItem('userData');
    // if (this.tokenExpirationTimer) {
    //   clearTimeout(this.tokenExpirationTimer);
    // }
    // this.tokenExpirationTimer = null;
  }

  autoLogout(expirationDuration: number) {
    // this.tokenExpirationTimer = setTimeout(() => {
    //   this.logout();
    // }, expirationDuration);
  }

  autologin() {
    // const userData: {
    //   email: string;
    //   id: string;
    //   token: string;
    //   tokenExpirationDate: string;
    // } = JSON.parse(localStorage.getItem('userData'));
    // if (!userData) {
    //   return;
    // }
    //
    // const loadedUser = new User(userData.email,
    //   userData.id,
    //   userData.token,
    //   new Date(userData.tokenExpirationDate));
    //
    // if (loadedUser.getToken()) {
    //   // this.user$.next(loadedUser);
    //   const expirationDuration = new Date(userData.tokenExpirationDate).getTime() - new Date().getTime();
    //   this.autoLogout(expirationDuration);
    // }
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
    return this.http.post<AuthResponseData>(url, {email, password, returnSecureToken: true});
  }

  getDescriptiveError(errorResponse: HttpErrorResponse): string {
    console.log('I am handling an error');
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return errorMessage;
    }
    switch (errorResponse.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return errorMessage;
  }
}
