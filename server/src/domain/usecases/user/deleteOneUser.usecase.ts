import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const DELETE_ONE_USER_USECASE = 'DELETE_ONE_USER_USECASE';

@Injectable()
export class DeleteOneUserUsecase {
  private SERVICE_NAME = 'Delete One User Usecase';

  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async handle(id: string) {
    try {
      const user = await this.userRepository.findOneById(id);
      if (!user) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.userRepository.deleteOneById(id);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
