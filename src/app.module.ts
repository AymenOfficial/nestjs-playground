import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './services/login.service';
import { LoginController } from './controllers/login.controller';
import { BrowserModule } from '@angular/platform-browser';

@Module({
  imports: [
  ],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService],
})
export class AppModule {}
