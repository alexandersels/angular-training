import {Action} from '@ngrx/store';
import {RecipeActionTypes} from '../enums/recipe.action.types';
import {Recipe} from '../models/recipe.model';

export class AddRecipeAction implements Action {
  readonly type = RecipeActionTypes.ADD;
}

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

export class DeleteRecipeAction implements Action {
  readonly type = RecipeActionTypes.DELETE;
}

export class UpdateRecipeAction implements Action {
  readonly type = RecipeActionTypes.UPDATE;
}

export type recipeActionTypes =
  | AddRecipeAction
  | FetchRecipeList
  | FetchRecipe
  | SelectRecipeAction
  | DeleteRecipeAction
  | UpdateRecipeAction
  ;
