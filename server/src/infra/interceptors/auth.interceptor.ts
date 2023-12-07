import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '../../domain/exceptions/unauthorized.exception';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  private interceptorName = 'Auth Interceptor';
  constructor(
    private readonly reflector: Reflector,
    private readonly jwtService: JwtService,
  ) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();

    const isPublic = this.reflector.get<any>(
      IS_PUBLIC_KEY,
      context.getHandler(),
    );

    if (isPublic) {
      return next.handle();
    }

    const headerAuthorization = request.headers['authorization'];

    if (headerAuthorization) {
      const [, token] = headerAuthorization.split('Bearer ');
      if (token) {
        request.token = token;
        const isValidToken = await this.jwtService.verify(token);
        if (!isValidToken) {
          throw new UnauthorizedException(
            [
              {
                token: 'invalid or expired',
              },
            ],
            this.interceptorName,
          );
        }
        return next.handle();
      }
    }
    throw new UnauthorizedException(
      [
        {
          token: 'invalid or expired',
        },
      ],
      this.interceptorName,
    );
  }
}
