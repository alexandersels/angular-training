import {ShoppingListAction, ShoppingListActions} from './shopping-list.actions';
import {initialShoppingListState, ShoppingListState} from './shopping-list.state';

export function shoppingListReducer(state: ShoppingListState = initialShoppingListState, action: ShoppingListActions): ShoppingListState {
  switch (action.type) {
    case ShoppingListAction.ADD_INGREDIENT: {

      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    }

    case ShoppingListAction.ADD_INGREDIENTS: {

      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    }

    case ShoppingListAction.UPDATE_INGREDIENT: {
      const index = state.ingredients.indexOf(state.selectedIngredient, 0);
      const ingredient = state.ingredients[index];

      const updatedIngredient = {
        ...ingredient,
        ...action.payload
      };

      const updatedIngredients = [...state.ingredients];
      updatedIngredients[index] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
        selectedIngredient: null
      };
    }

    case ShoppingListAction.DELETE_INGREDIENT: {
      const index = state.ingredients.indexOf(state.selectedIngredient, 0);
      const ingredients = [...state.ingredients];
      ingredients.splice(index, 1);

      return {
        ...state,
        ingredients,
        selectedIngredient: null
      };
    }

    case ShoppingListAction.SELECT_INGREDIENT: {

      return {
        ...state,
        selectedIngredient: action.payload
      };
    }

    default:
      return state;
  }
}
