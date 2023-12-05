import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';

export const DELETE_ONE_USER_USECASE = 'DELETE_ONE_USER_USECASE';

@Injectable()
export class DeleteOneUserUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async handle(id: string) {
    try {
      const user = await this.userRepository.findOneById(id);
      if (!user) throw new Error('user not found');

      return await this.userRepository.deleteOneById(id);
    } catch (error) {
      console.error(error);
    }
  }
}
