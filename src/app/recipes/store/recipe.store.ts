import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from '../models/recipe.model';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {recipeSelector} from './recipe.selectors';
import {RecipeService} from '../recipe.service';
import {FetchRecipe, FetchRecipeList, SelectRecipeAction} from './recipe.actions';

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

  async fetchRecipe(id: number): Promise<void> {
    const selectedRecipe: Recipe = await this.recipeService.fetchRecipe(id).toPromise();
    this.store.dispatch(new FetchRecipe(selectedRecipe));
  }

  selectRecipe(recipe: Recipe): void {
    this.store.dispatch(new SelectRecipeAction(recipe));
  }

}
