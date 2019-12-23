import {Component, ComponentFactoryResolver, OnDestroy, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthResponseData, AuthService} from './auth.service';
import {AlertComponent} from '../shared/alert/alert.component';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {PlaceHolderDirective} from '../shared/placeholder/placeholder.directive';
import {NewAlertComponent} from '../shared/new-alert/new.alert';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnDestroy {
  isLoginMode = false;
  isLoading = false;
  @ViewChild(PlaceHolderDirective, {static: false}) alertHost: PlaceHolderDirective;
  private closeSub: Subscription;

  @ViewChild(AlertComponent, {static: false}) alertComponent: AlertComponent;

  constructor(private authService: AuthService,
              private router: Router,
              private componentFactoryResolver: ComponentFactoryResolver) {
  }

  onSwitchMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoginMode) {
      authObservable = this.authService.login(email, password);
    } else {
      authObservable = this.authService.signup(email, password);
    }

    authObservable.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        this.showErrorAlert(errorMessage);
        this.alertComponent.showErrorMessage(errorMessage);
        this.isLoading = false;
      }
    );

    form.reset();
  }

  private showErrorAlert(errorMessage: string): void {
    // const newAlertComponent = new NewAlertComponent();
    const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(NewAlertComponent);
    const hostViewContrainerRef = this.alertHost.viewContainerRef;
    hostViewContrainerRef.clear();

    const componentRef = hostViewContrainerRef.createComponent(alertCmpFactory);
    componentRef.instance.message = errorMessage;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContrainerRef.clear();
    });
  }

  ngOnDestroy(): void {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}
