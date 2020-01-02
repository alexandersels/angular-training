import {createFeatureSelector, createSelector} from '@ngrx/store';
import {RecipeState} from './recipe.state';

export const recipeIdentifier = 'recipe';

const recipeState = createFeatureSelector<RecipeState>(recipeIdentifier);

export const recipeSelector = {
  fetchAllRecipes: createSelector(recipeState, (state: RecipeState) => state.recipes),
  selectedRecipe: createSelector(recipeState, (state: RecipeState) => state.selectedRecipe)
};

