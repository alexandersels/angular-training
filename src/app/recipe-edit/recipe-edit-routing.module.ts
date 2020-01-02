import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeEditPageComponent} from './page/recipe-edit-page/recipe-edit-page.component';

const routes: Routes = [
  {
    path: 'recipes/:id/edit',
    component: RecipeEditPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeEditRoutingModule {

}
