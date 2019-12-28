import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import {AuthStore} from '../store/auth.store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isLoginMode = false;

  isBusyAuthenticating$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: AuthStore) {
  }

  ngOnInit(): void {
    this.errorMessage$ = this.store.errorMessage;
    this.isBusyAuthenticating$ = this.store.isBusyAuthenticating;
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onClearMessage(): void {
    this.store.clearErrorMessage();
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.store.login(email, password);
    } else {
      this.store.signup(email, password);
    }

    form.reset();
  }
}
