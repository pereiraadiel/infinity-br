import { Body, Controller, Inject, Post } from '@nestjs/common';
import { AUTH_SERVICE, AuthService } from '../../domain/services/auth.service';
import { SignUserInRequest } from '../requests/auth/signUserIn.request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE)
    private readonly authService: AuthService,
  ) {}

  @Post()
  async signUserIn(@Body() request: SignUserInRequest) {
    return await this.authService.signUserIn(request);
  }
}
