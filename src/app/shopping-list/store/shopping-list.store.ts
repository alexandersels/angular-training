import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Ingredient} from '../../shared/ingredient.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {shoppingListSelectors} from './shopping-list.selectors';
import * as ShoppingListActions from './shopping-list.actions';

@Injectable()
export class ShoppingListStore {

  constructor(private store: Store<AppState>) {
  }

  get shoppingList(): Observable<Ingredient[]> {
    return this.store.select(shoppingListSelectors.ingredients);
  }

  get selectedIngredient(): Observable<Ingredient> {
    return this.store.select(shoppingListSelectors.selectedIngredient);
  }

  addIngredient(ingredient: Ingredient): void {
    this.store.dispatch(new ShoppingListActions.AddIngredient(ingredient));
  }

  updateIngredient(ingredient: Ingredient): void {
    this.store.dispatch(new ShoppingListActions.UpdateIngredient(ingredient));
  }

  selectIngredient(ingredient: Ingredient): void {
    this.store.dispatch(new ShoppingListActions.SelectIngredient(ingredient));
  }

  removeIngredient(): void {
    this.store.dispatch(new ShoppingListActions.DeleteIngredient());
  }
}
