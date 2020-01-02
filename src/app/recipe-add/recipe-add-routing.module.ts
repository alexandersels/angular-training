import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeAddPageComponent} from './page/recipe-add-page/recipe-add-page.component';

const routes: Routes = [
  {
    path: 'recipes/new',
    component: RecipeAddPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeAddRoutingModule {

}
