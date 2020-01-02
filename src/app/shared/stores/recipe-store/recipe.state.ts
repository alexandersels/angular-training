import {Recipe} from '../../models/recipe.model';

export interface RecipeState {
  recipes: Recipe[];
  selectedRecipe: Recipe;
}

export const initialRecipeState: RecipeState = {
  recipes: [],
  selectedRecipe: null
};
