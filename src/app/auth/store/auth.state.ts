import {User} from '../user.model';

export const initialAuthState: AuthState = {
  user: null
};

export interface AuthState {
  user: User;
}
