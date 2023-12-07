import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { CreateOneUserDTO } from '../../dtos/user/createOneUser.dto';
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { CatchExceptions } from '../catchExceptions';
import { HashProvider } from '../../../infra/providers/hash.provider';

export const CREATE_ONE_USER_USECASE = 'CREATE_ONE_USER_USECASE';

@Injectable()
export class CreateOneUserUsecase {
  private SERVICE_NAME = 'Create One User Usecase';

  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    private readonly hashProvider: HashProvider,
  ) {}

  async handle(dto: CreateOneUserDTO) {
    try {
      const user = await this.userRepository.findOneByEmail(dto.email);
      if (user) throw new AlreadyExistsException([], this.SERVICE_NAME);

      return await this.userRepository.createOne({
        ...dto,
        password: await this.hashProvider.hash(dto.password),
      });
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
