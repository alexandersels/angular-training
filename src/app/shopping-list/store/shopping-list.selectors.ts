import {createFeatureSelector, createSelector} from '@ngrx/store';
import {ShoppingListState} from './shopping-list.state';

export const shoppingListIdentifier = 'shoppingList';

const shoppingListState = createFeatureSelector<ShoppingListState>(shoppingListIdentifier);

export const shoppingListSelectors = {
  ingredients: createSelector(shoppingListState, (state: ShoppingListState) => state.ingredients),
  selectedIngredient: createSelector(shoppingListState, (state: ShoppingListState) => state.selectedIngredient)
};
