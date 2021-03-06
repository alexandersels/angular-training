import {Action} from '@ngrx/store';
import {AuthActionTypes} from '../enums/auth.action.types';
import {HttpErrorResponse} from '@angular/common/http';

export class LogInSuccessAction implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { email: string, id: string }) {
  }
}

export class LogInFailureAction implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;

  constructor(public errorMessage: HttpErrorResponse) {
  }
}

export class SignupSuccessAction implements Action {
  readonly type = AuthActionTypes.SIGNUP_SUCCESS;

  constructor(public payload: { email: string, id: string }) {
  }
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LOGOUT;
}

export class SignupFailureAction implements Action {
  readonly type = AuthActionTypes.SIGNUP_FAILED;

  constructor(public errorMessage: HttpErrorResponse) {
  }
}

export class AutologinAvailable implements Action {
  readonly type = AuthActionTypes.AUTOLOGIN_AVAILABLE;

  constructor(public payload: { token: string, id: string, email: string }) {
  }
}

export class AutologinNotAvailable implements Action {
  readonly type = AuthActionTypes.AUTOLOGIN_NOT_AVAILABLE;
}

export class SetLoginBusyAction implements Action {
  readonly type = AuthActionTypes.SET_LOGIN_BUSY;

  constructor(public loginBusy: boolean) {
  }
}

export type AuthReducerActions =
  | LogInSuccessAction
  | LogInFailureAction
  | SignupSuccessAction
  | SignupFailureAction
  | LogoutAction
  | AutologinAvailable
  | AutologinNotAvailable
  | SetLoginBusyAction
  ;
