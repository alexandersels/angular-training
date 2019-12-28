import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {AuthStore} from '../../auth/store/auth.store';

@Component({
  selector: 'app-mobile-navigation-bar',
  templateUrl: './mobile-navigation-bar.component.html',
  styleUrls: ['./mobile-navigation-bar.component.scss']
})
export class MobileNavigationBarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  sidebarDisplayed = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService, private authStore: AuthStore) {
  }

  ngOnInit(): void {
    this.userSub = this.authStore.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
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
