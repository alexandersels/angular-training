import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ErrorStore} from '../store/error.store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  errorMessage$: Observable<string>;

  constructor(private errorStore: ErrorStore) {
  }

  ngOnInit(): void {
    this.errorMessage$ = this.errorStore.errorMessage;
  }

  onBtnClick() {
    this.errorStore.clearError();
  }

}
