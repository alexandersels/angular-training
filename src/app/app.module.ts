import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {DesktopNavigationBarComponent} from './header/desktop-navigation-bar/desktop-navigation-bar.component';
import {MobileNavigationBarComponent} from './header/mobile-navigation-bar/mobile-navigation-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import {AppRoutingModule} from './app-routing.model';
import {HttpClientModule} from '@angular/common/http';
import {NewAlertComponent} from './shared/components/new-alert/new.alert';
import {RecipesModule} from './recipe-list/recipes.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {SharedModule} from './shared/shared.module';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import * as fromApp from './store/app.reducer';
import {environment, environment as env} from '../environments/environment';
import {ErrorModule} from './error/error.module';
import {AngularFireModule} from '@angular/fire';
import {RecipeAddModule} from './recipe-add/recipe-add.module';
import {RecipeEditModule} from './recipe-edit/recipe-edit.module';

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatCheckboxModule,
  MatSelectModule,
  MatIconModule,
  MatSidenavModule
];

const reduxDevtoolsModule = !env.production ? [StoreDevtoolsModule.instrument({maxAge: 25})] : [];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DesktopNavigationBarComponent,
    MobileNavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    ...materialModules,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    RecipeAddModule,
    RecipeEditModule,
    RecipesModule,
    AuthModule,
    SharedModule,
    ErrorModule,
    ShoppingListModule,
    StoreModule.forRoot(fromApp.appReducer),
    reduxDevtoolsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewAlertComponent
  ]
})
export class AppModule {
}
