import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';

@Component({
  selector: 'app-desktop-navigation-bar',
  templateUrl: './desktop-navigation-bar.component.html',
  styleUrls: ['./desktop-navigation-bar.component.scss']
})
export class DesktopNavigationBarComponent {

  constructor(private dataStorageService: DataStorageService) {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }


  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}
