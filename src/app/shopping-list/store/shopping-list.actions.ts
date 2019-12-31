import {Action} from '@ngrx/store';
import {Ingredient} from '../../ingredients/modules/ingredient.model';
import {ShoppingListActionTypes} from '../enums/shopping-list.action.types';

export class AddIngredientAction implements Action {
  readonly type = ShoppingListActionTypes.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class AddIngredientsAction implements Action {
  readonly type = ShoppingListActionTypes.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {
  }
}

export class UpdateIngredientAction implements Action {
  readonly type = ShoppingListActionTypes.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class DeleteIngredientAction implements Action {
  readonly type = ShoppingListActionTypes.DELETE_INGREDIENT;
}

export class SelectIngredientAction implements Action {
  readonly type = ShoppingListActionTypes.SELECT_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export type ShoppingListActions =
  | AddIngredientAction
  | AddIngredientsAction
  | UpdateIngredientAction
  | DeleteIngredientAction
  | SelectIngredientAction;
