import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {errorSelectors} from './error.selectors';
import {HttpErrorResponse} from '@angular/common/http';
import {ClearErrorAction, SubmitErrorAction} from './error.actions';

@Injectable()
export class ErrorStore {

  constructor(private store: Store<AppState>) {

  }

  get errorMessage(): Observable<string> {
    return this.store.select(errorSelectors.error);
  }

  registerError(error: HttpErrorResponse): void {
    const parserError = this.parseErrorResponse(error);
    this.store.dispatch(new SubmitErrorAction(parserError));
  }

  clearError(): void {
    this.store.dispatch(new ClearErrorAction());
  }

  parseErrorResponse(errorResponse: HttpErrorResponse): string {
    let errorMessage = 'An unknown error occurred!';
    if (!errorResponse.error || !errorResponse.error.error) {
      return errorMessage;
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
    return errorMessage;
  }
}
