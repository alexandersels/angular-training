import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './components/shopping-list.component';
import {AuthGuard} from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'shopping-list',
    component: ShoppingListComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoppingListRoutingModule {

}
