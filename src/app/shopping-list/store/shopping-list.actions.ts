import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';

export enum ShoppingListAction {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT = 'DELETE_INGREDIENT',
  SELECT_INGREDIENT = 'SELECT_INGREDIENT'
}

export class AddIngredientAction implements Action {
  readonly type = ShoppingListAction.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class AddIngredientsAction implements Action {
  readonly type = ShoppingListAction.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {
  }
}

export class UpdateIngredientAction implements Action {
  readonly type = ShoppingListAction.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class DeleteIngredientAction implements Action {
  readonly type = ShoppingListAction.DELETE_INGREDIENT;
}

export class SelectIngredientAction implements Action {
  readonly type = ShoppingListAction.SELECT_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export type ShoppingListActions =
  | AddIngredientAction
  | AddIngredientsAction
  | UpdateIngredientAction
  | DeleteIngredientAction
  | SelectIngredientAction;
