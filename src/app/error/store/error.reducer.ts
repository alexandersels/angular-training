import {ErrorState, initialErrorState} from './error.state';
import {ErrorReducerActions} from './error.actions';
import {ErrorActionTypes} from '../enums/error.action.types';

export function errorReducer(state: ErrorState = initialErrorState, action: ErrorReducerActions): ErrorState {
  switch (action.type) {
    case ErrorActionTypes.SUBMIT_ERROR: {
      return {
        ...state,
        errorMessage: action.errorMessage
      };
    }

    case ErrorActionTypes.CLEAR_ERROR: {
      return {
        ...state,
        errorMessage: null
      };
    }

    default: {
      return state;
    }
  }

}
