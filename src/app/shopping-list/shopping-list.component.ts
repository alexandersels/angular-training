import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as ShoppingListActions from './store/shopping-list.actions';
import {AppState} from '../store/app.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  private ingredients: Observable<{ ingredients: Ingredient[] }>;
  private idChangeSub: Subscription;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.ingredients = this.store.select('shoppingList');
  }

  ngOnDestroy(): void {
    this.idChangeSub.unsubscribe();
  }

  onEditItem(index: number): void {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
