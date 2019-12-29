import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesComponent} from './components/recipes.component';
import {RecipeListComponent} from './components/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './components/recipe-item/recipe-item.component';
import {RecipeStartComponent} from './components/recipe-start/recipe-start.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';
import {RecipeEditComponent} from './components/recipe-edit/recipe-edit.component';
import {RecipeStore} from './store/recipe.store';

@NgModule({
  declarations: [RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent],
  imports: [RouterModule,
    RecipesRoutingModule,
    SharedModule,
    ReactiveFormsModule],
  providers: [
    RecipeStore
  ]
})
export class RecipesModule {
}
