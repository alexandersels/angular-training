import {initialRecipeState, RecipeState} from './recipe.state';
import {recipeActionTypes} from './recipe.actions';
import {RecipeActionTypes} from '../enums/recipe.action.types';


export function recipeReducer(state: RecipeState = initialRecipeState, action: recipeActionTypes): RecipeState {
  switch (action.type) {
    case RecipeActionTypes.FETCH_ALL: {
      return {
        ...state
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
