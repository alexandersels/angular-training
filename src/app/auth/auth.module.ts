import {NgModule} from '@angular/core';
import {AuthComponent} from './components/auth.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {AuthStore} from './store/auth.store';
import {AuthService} from './auth.service';
import {ErrorModule} from '../error/error.module';
import {AuthGuard} from './auth.guard';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: 'auth', component: AuthComponent}]),
    SharedModule,
    ErrorModule
  ],
  providers: [
    AuthStore,
    AuthService,
    AuthGuard
  ]
})
export class AuthModule {

}
