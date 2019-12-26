import {NgModule} from '@angular/core';
import {RecipeService} from './recipes/recipe.service';
import {DataStorageService} from './shared/data-storage.service';
import {RecipesResolverService} from './recipes/recipes-resolver.service';
import {AuthService} from './auth/auth.service';
import {AuthGuard} from './auth/auth.guard';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptorService} from './auth/auth.interceptor.service';
import {ShoppingListService} from './shopping-list/shopping-list.service';

@NgModule({
  providers: [
    RecipeService,
    ShoppingListService,
    DataStorageService,
    RecipesResolverService,
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
