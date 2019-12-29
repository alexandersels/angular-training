import {Action} from '@ngrx/store';
import {RecipeActionTypes} from '../enums/recipe.action.types';

export class AddRecipeAction implements Action {
  readonly type = RecipeActionTypes.ADD;
}

export class FetchAllRecipesAction implements Action {
  readonly type = RecipeActionTypes.FETCH_ALL;
}

export class DeleteRecipeAction implements Action {
  readonly type = RecipeActionTypes.DELETE;
}

export class UpdateRecipeAction implements Action {
  readonly type = RecipeActionTypes.UPDATE;
}

export type recipeActionTypes =
  | AddRecipeAction
  | FetchAllRecipesAction
  | DeleteRecipeAction
  | UpdateRecipeAction
  ;
