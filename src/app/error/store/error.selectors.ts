import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ErrorState} from './error.state';

export const errorIdentifier = 'error';

const errorState = createFeatureSelector<ErrorState>(errorIdentifier);

export const errorSelectors = {
  error: createSelector(errorState, (state: ErrorState) => state.errorMessage)
};
