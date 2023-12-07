import { Inject, Injectable } from '@nestjs/common';
import {
  SIGN_USER_IN_USECASE,
  SignUserInUsecase,
} from '../usecases/auth/signUserIn.usecase';
import { SignUserInDTO } from '../dtos/auth/signUserIn.dto';

export const AUTH_SERVICE = 'AUTH_SERVICE';

@Injectable()
export class AuthService {
  constructor(
    @Inject(SIGN_USER_IN_USECASE)
    private readonly signUserInUsecase: SignUserInUsecase,
  ) {}

  async signUserIn(dto: SignUserInDTO) {
    return this.signUserInUsecase.handle(dto);
  }
}
