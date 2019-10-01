import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-desktop-navigation-bar',
  templateUrl: './desktop-navigation-bar.component.html',
  styleUrls: ['./desktop-navigation-bar.component.scss']
})
export class DesktopNavigationBarComponent {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
