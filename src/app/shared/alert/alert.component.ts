import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {

  @Input() errorMessage: string;
  @Output() clearMessage: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  onBtnClick() {
    this.clearMessage.emit();
  }

}
