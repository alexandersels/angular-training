import {NgModule} from '@angular/core';
import {NewAlertComponent} from './components/new-alert/new.alert';
import {LoadingSpinnerComponent} from './components/loading-spinner/loading-spinner.component';
import {PlaceHolderDirective} from './components/placeholder/placeholder.directive';
import {DropdownDirective} from './directives/dropdown.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    NewAlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NewAlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule {

}
