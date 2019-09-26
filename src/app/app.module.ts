import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { FooterComponent } from './footer/footer.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DesktopNavigationBarComponent } from './header/desktop-navigation-bar/desktop-navigation-bar.component';
import { MobileNavigationBarComponent } from './header/mobile-navigation-bar/mobile-navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule,
  MatRippleModule, MatSelectModule, MatIconModule, MatSidenavModule
} from '@angular/material';

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
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    FooterComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DesktopNavigationBarComponent,
    MobileNavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    ...materialModules,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
