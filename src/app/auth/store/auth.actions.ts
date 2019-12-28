import {Action} from '@ngrx/store';
import {AuthActionTypes} from '../enums/AuthActionTypes';

export class LogInSuccessAction implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { email: string, id: string }) {
  }
}

export class LogInFailureAction implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;

  constructor(public errorMessage: string) {
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

  constructor(public errorMessage: string) {
  }
}

export class ClearLoginErrorMessageAction implements Action {
  readonly type = AuthActionTypes.CLEAR_LOGIN_ERROR_MESSAGE;
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
  | SetLoginBusyAction
  | ClearLoginErrorMessageAction
  ;
