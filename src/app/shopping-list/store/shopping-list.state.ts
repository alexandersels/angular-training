import {Ingredient} from '../../ingredients/modules/ingredient.model';

export interface ShoppingListState {
  ingredients: Ingredient[];
  selectedIngredient: Ingredient;
}

export const initialShoppingListState: ShoppingListState = {
  ingredients: [
    new Ingredient({name: 'Apples', amount: 5}),
    new Ingredient({name: 'Tomatoes', amount: 10})
  ],
  selectedIngredient: null,
};
