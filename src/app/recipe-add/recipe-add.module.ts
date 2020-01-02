import {NgModule} from '@angular/core';
import {RecipeAddFormComponent} from './components/recipe-add-form/recipe-add-form.component';
import {RecipeAddPageComponent} from './page/recipe-add-page/recipe-add-page.component';
import {AuthModule} from '../auth/auth.module';
import {RecipeAddService} from './services/recipe-add.service';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RecipeAddRoutingModule} from './recipe-add-routing.module';

@NgModule({
  declarations: [
    RecipeAddFormComponent,
    RecipeAddPageComponent,
  ],
  imports: [
    AuthModule,
    RecipeAddRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RecipeAddFormComponent,
    RecipeAddRoutingModule
  ],
  providers: [
    RecipeAddService
  ]
})
export class RecipeAddModule {

}
