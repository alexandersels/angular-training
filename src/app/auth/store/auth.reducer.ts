import {AuthState, initialAuthState} from './auth.state';
import {AuthReducerActions} from './auth.actions';
import {AuthActionTypes} from '../enums/AuthActionTypes';

export function authReducer(state: AuthState = initialAuthState, action: AuthReducerActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.id,
          email: action.payload.email
        },
        errorMessage: null,
        busyAuthenticating: false
      };
    }

    case AuthActionTypes.LOGIN_FAILED: {
      return {
        ...state,
        errorMessage: action.errorMessage,
        busyAuthenticating: false
      };
    }

    case AuthActionTypes.SET_LOGIN_BUSY: {
      return {
        ...state,
        busyAuthenticating: action.loginBusy
      };
    }

    case AuthActionTypes.CLEAR_LOGIN_ERROR_MESSAGE: {
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
