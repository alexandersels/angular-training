import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

const appRoutes: Routes = [
    {
      path: '',
      redirectTo: '/recipes',
      pathMatch: 'full',
      canActivate: [AuthGuard]
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
