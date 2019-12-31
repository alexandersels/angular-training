import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Ingredient} from '../../ingredients/modules/ingredient.model';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import {shoppingListSelectors} from './shopping-list.selectors';
import {
  AddIngredientAction,
  AddIngredientsAction,
  DeleteIngredientAction,
  SelectIngredientAction,
  UpdateIngredientAction
} from './shopping-list.actions';

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
    this.store.dispatch(new AddIngredientAction(ingredient));
  }

  addIngredients(ingredients: Ingredient[]): void {
    this.store.dispatch(new AddIngredientsAction(ingredients));
  }

  updateIngredient(ingredient: Ingredient): void {
    this.store.dispatch(new UpdateIngredientAction(ingredient));
  }

  selectIngredient(ingredient: Ingredient): void {
    this.store.dispatch(new SelectIngredientAction(ingredient));
  }

  removeIngredient(): void {
    this.store.dispatch(new DeleteIngredientAction());
  }

}
