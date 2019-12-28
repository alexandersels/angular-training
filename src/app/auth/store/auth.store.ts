import {Injectable} from '@angular/core';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {AuthResponseData, AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {authSelectors} from './auth.selectors';
import {ClearLoginErrorMessage, LogInFailure, LogInSuccess, SetLoginBusyAction} from './auth.actions';


@Injectable()
export class AuthStore {

  constructor(private store: Store<AppState>,
              private authorizationService: AuthService,
              private router: Router) {
  }

  get errorMessage(): Observable<string> {
    return this.store.select(authSelectors.errorMessage);
  }

  get user(): Observable<User> {
    return this.store.select(authSelectors.user);
  }

  get isBusyAuthenticating(): Observable<boolean> {
    return this.store.select(authSelectors.isLoggingIn);
  }

  async login(email: string, password: string): Promise<void> {
    this.store.dispatch(new SetLoginBusyAction(true));
    const loginResult: LogInSuccess | LogInFailure = await this.authorizationService.login(email, password).toPromise();
    console.log(typeof loginResult);
    if (loginResult instanceof LogInSuccess) {
      this.router.navigate(['/recipes']);
    }
    this.store.dispatch(loginResult);
  }

  clearErrorMessage(): void {
    this.store.dispatch(new ClearLoginErrorMessage());
  }

  logout(): Promise<boolean> {
    return null;
  }

  async signup(email: string, password: string): Promise<AuthResponseData> {
    return null;
  }
}
