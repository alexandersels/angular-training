import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {RecipesComponent} from './components/recipes.component';
import {RecipeListComponent} from './page/recipe-list/recipe-list.component';
import {RecipeItemComponent} from './components/recipe-item/recipe-item.component';
import {RecipesRoutingModule} from './recipes-routing.module';
import {SharedModule} from '../shared/shared.module';
import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';
import {RecipeStore} from '../shared/stores/recipe-store/recipe.store';
import {RecipeService} from './services/recipe.service';
import {AngularFirestore} from '@angular/fire/firestore';

@NgModule({
  declarations: [RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent
  ],
  imports: [RouterModule,
    RecipesRoutingModule,
    SharedModule,
    ReactiveFormsModule],
  providers: [
    RecipeStore,
    RecipeService,
    AngularFirestore,
  ]
})
export class RecipesModule {
}
