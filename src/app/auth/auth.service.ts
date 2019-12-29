import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {
  AutologinNotAvailable,
  AutologinAvailable,
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

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(email: string, password: string): Observable<LogInSuccessAction | LogInFailureAction> {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`;
    return this.http.post<AuthResponseData>(url, {email, password, returnSecureToken: true})
      .pipe(
        map((authResponse: AuthResponseData) => {
          localStorage.setItem('token', authResponse.idToken);
          localStorage.setItem('id', authResponse.localId);
          localStorage.setItem('email', authResponse.email);

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
        map((authResonse: AuthResponseData) => {
          localStorage.setItem('token', authResonse.idToken);
          return new SignupSuccessAction({email: authResonse.email, id: authResonse.idToken});
        }),
        catchError((error: HttpErrorResponse) => {
          return of(new SignupFailureAction(error));
        })
      );
  }

  logout(): void {
    this.router.navigate(['/auth']);
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('email');
  }

  autologin(): AutologinAvailable | AutologinNotAvailable {
    if (!localStorage.getItem('token')) {
      return new AutologinNotAvailable();
    }

    if (!localStorage.getItem('id')) {
      return new AutologinNotAvailable();
    }

    if (!localStorage.getItem('email')) {
      return new AutologinNotAvailable();
    }

    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const email = localStorage.getItem('email');

    return new AutologinAvailable({token, id, email});
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

}
