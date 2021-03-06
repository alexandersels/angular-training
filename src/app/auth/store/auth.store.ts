import {Injectable} from '@angular/core';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';
import {authSelectors} from './auth.selectors';
import {
  AutologinAvailable,
  AutologinNotAvailable,
  LogInFailureAction,
  LogInSuccessAction,
  LogoutAction,
  SetLoginBusyAction,
  SignupFailureAction,
  SignupSuccessAction
} from './auth.actions';
import {ErrorStore} from '../../error/store/error.store';


@Injectable()
export class AuthStore {

  constructor(private store: Store<AppState>,
              private errorStore: ErrorStore,
              private authorizationService: AuthService,
              private router: Router) {
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
      this.router.navigate(['/recipe-list']);
    } else if (loginResult instanceof LogInFailureAction) {
      this.errorStore.registerError(loginResult.errorMessage);
    }
    this.store.dispatch(loginResult);
  }

  async signup(email: string, password: string): Promise<void> {
    this.store.dispatch(new SetLoginBusyAction(true));
    const signupResult: SignupSuccessAction | SignupFailureAction = await this.authorizationService.signup(email, password).toPromise();
    if (signupResult instanceof SignupSuccessAction) {
      this.router.navigate(['/recipe-list']);
    } else if (signupResult instanceof SignupFailureAction) {
      this.errorStore.registerError(signupResult.errorMessage);
    }
    this.store.dispatch(signupResult);
  }

  logout(): void {
    this.authorizationService.logout();
    this.store.dispatch(new LogoutAction());
  }

  autologin(): void {
    const autologinResult: AutologinNotAvailable | AutologinAvailable = this.authorizationService.autologin();
    this.store.dispatch(autologinResult);
  }

}
