import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './components/recipes.component';
import {AuthGuard} from '../auth/auth.guard';
import {RecipeStartComponent} from './components/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './components/recipe-edit/recipe-edit.component';
import {RecipeDetailResolver} from './components/recipe-detail/recipe-detail.resolver';

const routes: Routes = [
  {
    path: 'recipes/new',
    component: RecipeEditComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'recipes/:id/edit',
    component: RecipeEditComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: RecipeStartComponent, pathMatch: 'full'},
      {path: ':id', component: RecipeDetailComponent, pathMatch: 'full', resolve: [RecipeDetailResolver]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule {

}
