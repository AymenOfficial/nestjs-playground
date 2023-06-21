import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const appRoutes: Route[] = [
  { path: '', component: NxWelcomeComponent },
  { path: 'login', component: LoginPageComponent },
];
