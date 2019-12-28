import {Injectable} from '@angular/core';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {authSelectors} from './auth.selectors';
import {
  ClearLoginErrorMessageAction,
  LogInFailureAction,
  LogInSuccessAction, LogoutAction,
  SetLoginBusyAction,
  SignupFailureAction,
  SignupSuccessAction
} from './auth.actions';


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
    return this.store.select(authSelectors.isBusyAuthenticating);
  }

  get isAuthenticated(): Observable<boolean> {
    return this.store.select(authSelectors.isAuthenticated);
  }

  async login(email: string, password: string): Promise<void> {
    this.store.dispatch(new SetLoginBusyAction(true));
    const loginResult: LogInSuccessAction | LogInFailureAction = await this.authorizationService.login(email, password).toPromise();
    if (loginResult instanceof LogInSuccessAction) {
      this.router.navigate(['/recipes']);
    }
    this.store.dispatch(loginResult);
  }

  async signup(email: string, password: string): Promise<void> {
    this.store.dispatch(new SetLoginBusyAction(true));
    const signupResult: SignupSuccessAction | SignupFailureAction = await this.authorizationService.signup(email, password).toPromise();
    if (signupResult instanceof SignupSuccessAction) {
      this.router.navigate(['/recipes']);
    }
    this.store.dispatch(signupResult);
  }

  logout(): void {
    this.store.dispatch(new LogoutAction());
  }

  clearErrorMessage(): void {
    this.store.dispatch(new ClearLoginErrorMessageAction());
  }

}
