import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Recipe} from '../models/recipe.model';
import {AppState} from '../../store/app.reducer';
import {Store} from '@ngrx/store';
import {recipeSelector} from './recipe.selectors';

@Injectable()
export class RecipeStore {

  constructor(private store: Store<AppState>) {
  }

  get recipes(): Observable<Recipe[]> {
    return this.store.select(recipeSelector.fetchAllRecipes);
  }

  get selectedRecipe(): Observable<Recipe> {
    return this.store.select(recipeSelector.selectedRecipe);
  }

}
