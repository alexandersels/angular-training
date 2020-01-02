import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './components/recipes.component';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './page/recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: RecipeListComponent, pathMatch: 'full'},
      {path: ':id', component: RecipeDetailComponent, pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
