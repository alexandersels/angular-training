import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {RecipesResolverService} from './recipes/recipes-resolver.service';
import {AuthComponent} from './auth/auth.component';

const appRoutes: Routes = [
    {path: 'recipes/new', component: RecipeEditComponent, pathMatch: 'full'},
    {path: 'recipes/:id/edit', component: RecipeEditComponent, pathMatch: 'full', resolve: [RecipesResolverService]},
    {path: 'shopping-list', component: ShoppingListComponent, pathMatch: 'full'},
    {path: '', redirectTo: '/recipes', pathMatch: 'full'},
    {
      path: 'recipes', component: RecipesComponent, children: [
        {path: '', component: RecipeStartComponent, pathMatch: 'full'},
        {path: ':id', component: RecipeDetailComponent, pathMatch: 'full', resolve: [RecipesResolverService]},
      ]
    },
    {path: 'auth', component: AuthComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
