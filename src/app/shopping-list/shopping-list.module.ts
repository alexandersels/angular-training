import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './components/shopping-list.component';
import {ShoppingEditComponent} from './shopping-edit/shopping-edit.component';
import {RouterModule} from '@angular/router';
import {ShoppingListRoutingModule} from './shopping-list-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {ShoppingListStore} from './store/shopping-list.store';

@NgModule({
  declarations: [ShoppingListComponent,
    ShoppingEditComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ShoppingListRoutingModule,
    SharedModule],
  providers: [
    ShoppingListStore,
  ]
})
export class ShoppingListModule {

}
