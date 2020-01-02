import {Action} from '@ngrx/store';
import {RecipeActionTypes} from '../../enums/recipe.action.types';
import {Recipe} from '../../models/recipe.model';

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

export class ResetSelectedRecipeAction implements Action {
  readonly type = RecipeActionTypes.RESET_SELECTED_RECIPE;
}

export type recipeActionTypes =
  | FetchRecipeList
  | FetchRecipe
  | SelectRecipeAction
  | ResetSelectedRecipeAction
  ;
