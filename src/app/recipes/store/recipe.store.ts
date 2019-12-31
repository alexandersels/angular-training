import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from '../models/recipe.model';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {recipeSelector} from './recipe.selectors';
import {RecipeService} from '../recipe.service';
import {FetchRecipe, FetchRecipeList, RecipeDeleteFailedAction, RecipeDeleteSuccessAction, SelectRecipeAction} from './recipe.actions';
import {AngularFirestore} from '@angular/fire/firestore';

export interface Test {
  name: string;
  description: string;
  imagePath: string;
  id: string;
}

@Injectable()
export class RecipeStore {

  constructor(private store: Store<AppState>,
              private recipeService: RecipeService,
              private afs: AngularFirestore) {
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

  async addRecipe(newRecipe: Recipe): Promise<void> {
    const addResult = await this.recipeService.addRecipe(newRecipe).toPromise();
    this.store.dispatch(addResult);
  }

  async deleteRecipe(id: string): Promise<void> {
    const deleteResult = await this.recipeService.deleteRecipe(id).toPromise();
    this.store.dispatch(deleteResult);
  }

  updateRecipe(): void {

  }

  selectRecipe(recipe: Recipe): void {
    this.store.dispatch(new SelectRecipeAction(recipe));
  }

}
