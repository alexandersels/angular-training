import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';

export enum ShoppingListAction {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT = 'DELETE_INGREDIENT',
  SELECT_INGREDIENT = 'SELECT_INGREDIENT'
}

export class AddIngredient implements Action {
  readonly type = ShoppingListAction.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class AddIngredients implements Action {
  readonly type = ShoppingListAction.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {
  }
}

export class UpdateIngredient implements Action {
  readonly type = ShoppingListAction.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class DeleteIngredient implements Action {
  readonly type = ShoppingListAction.DELETE_INGREDIENT;
}

export class SelectIngredient implements Action {
  readonly type = ShoppingListAction.SELECT_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | SelectIngredient;
