import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-mobile-navigation-bar',
  templateUrl: './mobile-navigation-bar.component.html',
  styleUrls: ['./mobile-navigation-bar.component.scss']
})
export class MobileNavigationBarComponent implements OnInit, OnDestroy{
  isAuthenticated = false;
  private userSub: Subscription;

  sidebarDisplayed = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
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

  burgerMenuClicked(): void {
    this.sidebarDisplayed = !this.sidebarDisplayed;
  }

  closeSidebar(): void {
    this.sidebarDisplayed = false;
  }
}
