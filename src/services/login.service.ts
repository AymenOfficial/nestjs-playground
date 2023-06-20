import { Injectable, NotImplementedException } from '@nestjs/common';

@Injectable()
export class LoginService {
  async signIn(): Promise<void> {
    throw new NotImplementedException()
  }

  async signOut(): Promise<void> {
    throw new NotImplementedException()
  }
}
