import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from '@auth0/auth0-angular';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { environment } from './environments/environment';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    AuthModule.forRoot({
      domain: environment.auth.domain,
      clientId: environment.auth.clientId,
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
