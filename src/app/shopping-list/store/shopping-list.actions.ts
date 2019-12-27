import {Action} from '@ngrx/store';
import {Ingredient} from '../../shared/ingredient.model';

export enum ShoppingListAction {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT = 'DELETE_INGREDIENT',
  START_EDIT = 'START_EDIT',
  STOP_EDIT = 'STOP_EDIT'
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

export class StartEdit implements Action {
  readonly type = ShoppingListAction.START_EDIT;

  constructor(public payload: number) {
  }
}

export class StopEdit implements Action {
  readonly type = ShoppingListAction.STOP_EDIT;
}

export type ShoppingListActions =
  | AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEdit
  | StopEdit;
