import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from '../../models/recipe.model';
import {AppState} from '../../../store/app.reducer';
import {Store} from '@ngrx/store';
import {recipeSelector} from './recipe.selectors';
import {RecipeService} from '../../../recipe-list/services/recipe.service';
import {FetchRecipe, FetchRecipeList, ResetSelectedRecipeAction} from './recipe.actions';

@Injectable()
export class RecipeStore {

  constructor(private store: Store<AppState>,
              private recipeService: RecipeService) {
  }

  get recipes(): Observable<Recipe[]> {
    return this.store.select(recipeSelector.fetchAllRecipes);
  }

  get selectedRecipe(): Observable<Recipe> {
    return this.store.select(recipeSelector.selectedRecipe);
  }

  async fetchRecipeList(): Promise<void> {
    const recipes: Recipe[] = await this.recipeService.fetchRecipes().toPromise();
    this.store.dispatch(new FetchRecipeList(recipes));
  }

  async fetchRecipe(id: string): Promise<void> {
    const selectedRecipe: Recipe = await this.recipeService.fetchRecipe(id).toPromise();
    if (selectedRecipe) {
      this.store.dispatch(new FetchRecipe(selectedRecipe));
    } else {
      // TODO: landing page
      console.log('woopsie');
    }
  }

  async deleteRecipe(id: string): Promise<void> {
    await this.recipeService.deleteRecipe(id);
  }

  async updateRecipe(id: string, recipe: Recipe): Promise<void> {
    await this.recipeService.updateRecipe(id, recipe);
  }

  resetSelectedRecipe(): void {
    this.store.dispatch(new ResetSelectedRecipeAction());
  }

}
