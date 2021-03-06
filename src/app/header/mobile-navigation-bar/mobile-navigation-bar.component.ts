import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthStore} from '../../auth/store/auth.store';
import {RecipeStore} from '../../shared/stores/recipe-store/recipe.store';

@Component({
  selector: 'app-mobile-navigation-bar',
  templateUrl: './mobile-navigation-bar.component.html',
  styleUrls: ['./mobile-navigation-bar.component.scss']
})
export class MobileNavigationBarComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;
  sidebarDisplayed = false;

  constructor(private recipeStore: RecipeStore,
              private authStore: AuthStore) {
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authStore.isAuthenticated;
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.recipeStore.fetchRecipeList();
  }

  onLogout() {
    this.authStore.logout();
  }

  burgerMenuClicked(): void {
    this.sidebarDisplayed = !this.sidebarDisplayed;
  }

  closeSidebar(): void {
    this.sidebarDisplayed = false;
  }

}
