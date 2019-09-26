import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mobile-navigation-bar',
  templateUrl: './mobile-navigation-bar.component.html',
  styleUrls: ['./mobile-navigation-bar.component.scss']
})
export class MobileNavigationBarComponent implements OnInit {

  sidebarDisplayed = false;

  constructor() {
  }

  ngOnInit() {
  }

  burgerMenuClicked(): void {
    this.sidebarDisplayed = !this.sidebarDisplayed;
  }

  closeSidebar(): void {
    this.sidebarDisplayed = false;
  }
}
