import {shoppingListReducer} from '../shopping-list/store/shopping-list.reducer';
import {authReducer} from '../auth/store/auth.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {AuthState} from '../auth/store/auth.state';
import {ShoppingListState} from '../shopping-list/store/shopping-list.state';

export interface AppState {
  shoppingList: ShoppingListState;
  auth: AuthState;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: shoppingListReducer,
  auth: authReducer
};
