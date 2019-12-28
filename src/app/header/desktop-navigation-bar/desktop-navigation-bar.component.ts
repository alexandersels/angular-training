import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Subscription} from 'rxjs';
import {AuthStore} from '../../auth/store/auth.store';

@Component({
  selector: 'app-desktop-navigation-bar',
  templateUrl: './desktop-navigation-bar.component.html',
  styleUrls: ['./desktop-navigation-bar.component.scss']
})
export class DesktopNavigationBarComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private dataStorageService: DataStorageService,
              private authStorage: AuthStore) {
  }

  ngOnInit(): void {
    this.userSub = this.authStorage.user.subscribe(user => {
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

  onLogout(): void {
    this.authStorage.logout();
  }


}
