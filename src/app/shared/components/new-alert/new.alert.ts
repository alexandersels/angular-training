import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-new-alert',
  templateUrl: './new.alert.html',
  styleUrls: ['./new.alert.scss']
})
export class NewAlertComponent {
  @Input() message: string;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
