import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  AutologinAvailable,
  AutologinNotAvailable,
  LogInFailureAction,
  LogInSuccessAction,
  SignupFailureAction,
  SignupSuccessAction
} from './store/auth.actions';

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
          this.setLocalStorage(authResponse);
          return new LogInSuccessAction({email: authResponse.email, id: authResponse.localId});
        }),
        catchError((error: HttpErrorResponse) => {
          return of(new LogInFailureAction(error));
        })
      );
  }

  signup(email: string, password: string): Observable<SignupSuccessAction | SignupFailureAction> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`;
    return this.http.post<AuthResponseData>(url, {email, password, returnSecureToken: true})
      .pipe(
        map((authResponse: AuthResponseData) => {
          this.setLocalStorage(authResponse);
          return new SignupSuccessAction({email: authResponse.email, id: authResponse.idToken});
        }),
        catchError((error: HttpErrorResponse) => {
          return of(new SignupFailureAction(error));
        })
      );
  }

  logout(): void {
    this.router.navigate(['/auth']);
    this.resetLocalStorage();
  }

  autologin(): AutologinAvailable | AutologinNotAvailable {
    if (!localStorage.getItem('token')
      || !localStorage.getItem('id')
      || !localStorage.getItem('email')
      || !localStorage.getItem('expires')) {
      return new AutologinNotAvailable();
    }

    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');
    const expires = +localStorage.getItem('expires');

    const expirationDate = new Date();
    expirationDate.setTime(expires);

    if (expirationDate < new Date()) {
      this.resetLocalStorage();
      return new AutologinNotAvailable();
    }

    return new AutologinAvailable({token, id, email});
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  setLocalStorage(authResponse: AuthResponseData) {
    const currentDateTime = new Date();
    currentDateTime.setSeconds(new Date().getSeconds() + +authResponse.expiresIn);

    localStorage.setItem('token', authResponse.idToken);
    localStorage.setItem('id', authResponse.localId);
    localStorage.setItem('email', authResponse.email);
    localStorage.setItem('expires', currentDateTime.getTime() + '');
  }

  resetLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
    localStorage.removeItem('expires');
  }
}
