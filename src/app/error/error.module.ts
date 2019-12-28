import {NgModule} from '@angular/core';
import {AlertComponent} from './components/alert.component';
import {CommonModule} from '@angular/common';
import {ErrorStore} from './store/error.store';

@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent
  ],
  providers: [
    ErrorStore
  ]
})
export class ErrorModule {

}
