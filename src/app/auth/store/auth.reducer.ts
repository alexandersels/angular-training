import {AuthState, initialAuthState} from './auth.state';
import {AuthReducerActions} from './auth.actions';
import {AuthActionTypes} from '../enums/auth.action.types';

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
        busyAuthenticating: false
      };
    }

    case AuthActionTypes.LOGIN_FAILED: {
      return {
        ...state,
        busyAuthenticating: false
      };
    }

    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id: action.payload.id,
          email: action.payload.email
        },
        busyAuthenticating: false
      };
    }

    case AuthActionTypes.SIGNUP_FAILED: {
      return {
        ...state,
        busyAuthenticating: false
      };
    }

    case AuthActionTypes.LOGOUT: {
      return {
        ...state,
        user: null,
        isAuthenticated: false
      };
    }

    case AuthActionTypes.SET_LOGIN_BUSY: {
      return {
        ...state,
        busyAuthenticating: action.loginBusy
      };
    }

    default: {
      return state;
    }
  }
}
