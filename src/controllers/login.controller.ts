import { Controller, Get } from '@nestjs/common';
import { LoginService } from 'src/services/login.service';

@Controller()
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get()
  async signInUser(): Promise<string> {
    await this.loginService.signIn();
    return 'TOKEN_PLACEHODLER'
  }

  @Get()
  async signOutUser(): Promise<string> {
    await this.loginService.signOut();
    return 'SIGNOUT_CONFIRMATION'
  }

  
}
