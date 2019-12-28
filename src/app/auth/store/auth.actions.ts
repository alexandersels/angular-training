import {Action} from '@ngrx/store';
import {AuthActionTypes} from '../enums/AuthActionTypes';

export class LogInSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: { email: string, id: string }) {
  }
}

export class LogInFailure implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;

  constructor(public errorMessage: string) {
  }
}

export class ClearLoginErrorMessage implements Action {
  readonly type = AuthActionTypes.CLEAR_LOGIN_ERROR_MESSAGE;
}

export class SetLoginBusyAction implements Action {
  readonly type = AuthActionTypes.SET_LOGIN_BUSY;

  constructor(public loginBusy: boolean) {
  }
}

export type AuthReducerActions =
  | LogInSuccess
  | LogInFailure
  | SetLoginBusyAction
  | ClearLoginErrorMessage
  ;
