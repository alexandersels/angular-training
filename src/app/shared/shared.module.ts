import {NgModule} from '@angular/core';
import {AlertComponent} from './alert/alert.component';
import {NewAlertComponent} from './new-alert/new.alert';
import {LoadingSpinnerComponent} from './loading-spinner/loading-spinner.component';
import {PlaceHolderDirective} from './placeholder/placeholder.directive';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AlertComponent,
    NewAlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    NewAlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule {

}
