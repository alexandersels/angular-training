import {NgModule} from '@angular/core';
import {RecipeService} from './recipe-list/services/recipe.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth/auth.interceptor.service';

@NgModule({
  providers: [
    RecipeService,
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {
}
