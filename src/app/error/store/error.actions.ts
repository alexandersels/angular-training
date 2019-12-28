import {Action} from '@ngrx/store';
import {ErrorActionTypes} from '../enums/error.action.types';

export class SubmitErrorAction implements Action {
  readonly type = ErrorActionTypes.SUBMIT_ERROR;

  constructor(public errorMessage: string) {
  }
}

export class ClearErrorAction implements Action {
  readonly type = ErrorActionTypes.CLEAR_ERROR;
}

export type ErrorReducerActions =
  | SubmitErrorAction
  | ClearErrorAction
  ;
