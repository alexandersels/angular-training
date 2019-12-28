import {User} from '../models/user.model';

export interface AuthState {
  isAuthenticated: boolean;
  busyAuthenticating: boolean;
  user: User;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  busyAuthenticating: false,
};
