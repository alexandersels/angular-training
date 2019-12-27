import {Ingredient} from '../../shared/ingredient.model';

export interface ShoppingListState {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;
}

export const initialShoppingListState: ShoppingListState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  selectedIngredient: null,
};
