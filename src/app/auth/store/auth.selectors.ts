import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthState} from './auth.state';

export const authIdentifier = 'auth';

const authState = createFeatureSelector<AuthState>(authIdentifier);

export const authSelectors = {
  user: createSelector(authState, (state: AuthState) => state.user),
  errorMessage: createSelector(authState, (state: AuthState) => state.errorMessage),
  isLoggingIn: createSelector(authState, (state: AuthState) => state.busyAuthenticating)
};
