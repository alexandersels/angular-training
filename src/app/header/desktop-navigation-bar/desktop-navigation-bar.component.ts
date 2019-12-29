import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Observable, Subscription} from 'rxjs';
import {AuthStore} from '../../auth/store/auth.store';
import {RecipeStore} from '../../recipes/store/recipe.store';

@Component({
  selector: 'app-desktop-navigation-bar',
  templateUrl: './desktop-navigation-bar.component.html',
  styleUrls: ['./desktop-navigation-bar.component.scss']
})
export class DesktopNavigationBarComponent implements OnInit {

  isAuthenticated$: Observable<boolean>;

  constructor(private recipeStore: RecipeStore,
              private authStorage: AuthStore) {
  }

  ngOnInit(): void {
    this.isAuthenticated$ = this.authStorage.isAuthenticated;
  }

  onSaveData() {
    // this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.recipeStore.fetchRecipeList();
  }

  onLogout(): void {
    this.authStorage.logout();
  }


}
