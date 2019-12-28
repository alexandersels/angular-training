import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable, of, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Action} from '@ngrx/store';
import {LogInFailure, LogInSuccess} from './store/auth.actions';

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

  signup(email: string, password: string): Observable<AuthResponseData> {
    // return this.http.post<AuthResponseData>(
    //   'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseAPIKey,
    //   {
    //     email,
    //     password,
    //     returnSecureToken: true
    //   }
    // ).pipe(catchError(this.handleError), tap(this.handleAuthentication));
    return null;
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

  login(email: string, password: string): Observable<LogInSuccess | LogInFailure> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`;
    return this.http.post<AuthResponseData>(url, {email, password, returnSecureToken: true})
      .pipe(
        map(authResponse => {
          localStorage.setItem('token', authResponse.idToken);
          return new LogInSuccess({email: authResponse.email, id: authResponse.localId});
        }),
        catchError((error: Error) => {
          return of(new LogInFailure(error.message));
        })
      );
  }

  signUp(email: string, password: string): Observable<AuthResponseData> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
    return this.http.post<AuthResponseData>(url, {email, password, returnSecureToken: true});
  }

  private handleAuthentication(responseData: AuthResponseData) {
    // console.log('I am handling the authentication');
    // const expirationDate = new Date(new Date().getTime() + +responseData.expiresIn * 1000);
    // // const user$ = new User(responseData.email, responseData.localId, responseData.idToken, expirationDate);
    // // this.user$.next(user$);
    // this.autoLogout(+responseData.expiresIn * 1000);
    // localStorage.setItem('userData', JSON.stringify(user$));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    console.log('I am handling an error');
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return throwError(errorMessage);
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
    return throwError(errorMessage);
  }
}
