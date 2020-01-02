import {NgModule} from '@angular/core';
import {RecipeEditPageComponent} from './page/recipe-edit-page/recipe-edit-page.component';
import {RecipeEditFormComponent} from './components/recipe-edit-form/recipe-edit-form.component';
import {AuthModule} from '../auth/auth.module';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import {RecipeEditRoutingModule} from './recipe-edit-routing.module';

@NgModule({
  declarations: [
    RecipeEditPageComponent,
    RecipeEditFormComponent
  ],
  imports: [
    AuthModule,
    SharedModule,
    RecipeEditRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    RecipeEditPageComponent,
    RecipeEditFormComponent,
    RecipeEditRoutingModule
  ]
})
export class RecipeEditModule {

}
