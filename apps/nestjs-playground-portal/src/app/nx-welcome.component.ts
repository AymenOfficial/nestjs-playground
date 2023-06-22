import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ah-nx-welcome',
  templateUrl: './nx-welcome.component.html',
  styleUrls: ['./nx-welcome.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit, OnDestroy {
  user$ = this.authService.user$;
  subscription!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.user$.subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  signIn() {
    this.authService.loginWithRedirect();
  }

  signOut() {
    this.authService.logout();
  }
}
