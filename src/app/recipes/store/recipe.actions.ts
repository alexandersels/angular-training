import {Action} from '@ngrx/store';
import {RecipeActionTypes} from '../enums/recipe.action.types';
import {Recipe} from '../models/recipe.model';

export class FetchRecipeList implements Action {
  readonly type = RecipeActionTypes.FETCH_RECIPE_LIST;

  constructor(public recipes: Recipe[]) {
  }
}

export class FetchRecipe implements Action {
  readonly type = RecipeActionTypes.FETCH_RECIPE;

  constructor(public recipe: Recipe) {
  }
}

export class SelectRecipeAction implements Action {
  readonly type = RecipeActionTypes.SELECT_RECIPE;

  constructor(public selectedRecipe: Recipe) {
  }
}

export class AddRecipeAction implements Action {
  readonly type = RecipeActionTypes.ADD;

  constructor(public recipe: Recipe) {
  }
}

export class RecipeAddSuccessAction implements Action {
  readonly type = RecipeActionTypes.ADD_SUCCESS;
}

export class RecipeAddFailedAction implements Action {
  readonly type = RecipeActionTypes.ADD_FAILED;
}

export class RecipeDeleteSuccessAction implements Action {
  readonly type = RecipeActionTypes.DELETE_SUCCESS;
}


export class RecipeDeleteFailedAction implements Action {
  readonly type = RecipeActionTypes.DELETE_FAILED;
}

export class UpdateRecipeAction implements Action {
  readonly type = RecipeActionTypes.UPDATE;
}

export type recipeActionTypes =
  | AddRecipeAction
  | RecipeAddSuccessAction
  | RecipeAddFailedAction
  | FetchRecipeList
  | FetchRecipe
  | SelectRecipeAction
  | RecipeDeleteFailedAction
  | RecipeDeleteSuccessAction
  | UpdateRecipeAction
  ;
