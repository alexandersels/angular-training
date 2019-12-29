import {shoppingListReducer} from '../shopping-list/store/shopping-list.reducer';
import {authReducer} from '../auth/store/auth.reducer';
import {ActionReducerMap} from '@ngrx/store';
import {AuthState} from '../auth/store/auth.state';
import {ShoppingListState} from '../shopping-list/store/shopping-list.state';
import {ErrorState} from '../error/store/error.state';
import {errorReducer} from '../error/store/error.reducer';
import {RecipeState} from '../recipes/store/recipe.state';
import {recipeReducer} from '../recipes/store/recipe.reducers';

export interface AppState {
  shoppingList: ShoppingListState;
  auth: AuthState;
  error: ErrorState;
  recipe: RecipeState;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: shoppingListReducer,
  auth: authReducer,
  error: errorReducer,
  recipe: recipeReducer
};
