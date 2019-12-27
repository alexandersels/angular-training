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
import {NewAlertComponent} from './shared/new-alert/new.alert';
import {RecipesModule} from './recipes/recipes.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';
import {AuthModule} from './auth/auth.module';
import {StoreModule} from '@ngrx/store';
import * as fromApp from './store/app.reducer';

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
    RecipesModule,
    AuthModule,
    CoreModule,
    SharedModule,
    ShoppingListModule,
    StoreModule.forRoot(fromApp.appReducer)
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewAlertComponent
  ]
})
export class AppModule {
}
