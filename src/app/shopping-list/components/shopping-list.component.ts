import {Component, OnInit} from '@angular/core';
import {Ingredient} from '../../ingredients/modules/ingredient.model';
import {Observable} from 'rxjs';
import {ShoppingListStore} from '../store/shopping-list.store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  private ingredients: Observable<Ingredient[]>;
  private selectedIngredient: Observable<Ingredient>;

  constructor(private store: ShoppingListStore) {
  }

  ngOnInit() {
    this.ingredients = this.store.shoppingList;
    this.selectedIngredient = this.store.selectedIngredient;
  }

  onSelectItem(ingredient: Ingredient): void {
    this.store.selectIngredient(ingredient);
  }

  onIngredientAdded(ingredient: Ingredient): void {
    this.store.addIngredient(ingredient);
  }

  onIngredientEdited(ingredient: Ingredient): void {
    this.store.updateIngredient(ingredient);
  }

  onIngredientDeleted(): void {
    this.store.removeIngredient();
  }

  onSelectionCleared(): void {
    this.store.selectIngredient(null);
  }
}
