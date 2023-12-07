import { Inject, Injectable } from '@nestjs/common';
import { CatchExceptions } from '../catchExceptions';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { SignUserInDTO } from '../../dtos/auth/signUserIn.dto';
import { HashProvider } from '../../../infra/providers/hash.provider';
import { JwtService } from '@nestjs/jwt';
import { UnauthorizedException } from '../../exceptions/unauthorized.exception';

export const SIGN_USER_IN_USECASE = 'SIGN_USER_IN_USECASE';

@Injectable()
export class SignUserInUsecase {
  private SERVICE_NAME = 'Sign User In Usecase';

  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
    private readonly jwtService: JwtService,
  ) {}

  async handle(dto: SignUserInDTO) {
    try {
      const user = await this.userRepository.findOneByEmail(dto.email);
      if (!user) throw new UnauthorizedException([], this.SERVICE_NAME);

      const isPasswordValid = this.hashProvider.verify(
        dto.password,
        user.password,
      );

      if (!isPasswordValid)
        throw new UnauthorizedException([], this.SERVICE_NAME);

      const token = this.jwtService.sign({
        id: user.id,
        name: user.name,
        role: user.role,
      });

      return { token };
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
