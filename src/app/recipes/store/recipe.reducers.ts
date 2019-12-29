import {initialRecipeState, RecipeState} from './recipe.state';
import {recipeActionTypes} from './recipe.actions';
import {RecipeActionTypes} from '../enums/recipe.action.types';


export function recipeReducer(state: RecipeState = initialRecipeState, action: recipeActionTypes): RecipeState {
  switch (action.type) {
    case RecipeActionTypes.FETCH_RECIPE_LIST: {
      return {
        ...state,
        recipes: action.recipes
      };
    }

    case RecipeActionTypes.FETCH_RECIPE: {
      return {
        ...state,
        selectedRecipe: action.recipe
      };
    }

    case RecipeActionTypes.SELECT_RECIPE: {
      return {
        ...state,
        selectedRecipe: action.selectedRecipe
      };
    }

    case RecipeActionTypes.ADD: {
      return {
        ...state
      };
    }

    case RecipeActionTypes.UPDATE: {
      return {
        ...state
      };
    }

    case RecipeActionTypes.DELETE: {
      return {
        ...state
      };
    }

    default: {
      return state;
    }
  }
}
