import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { UpdateOneUserDTO } from '../../dtos/user/updateOneUser.dto';

export const UPDATE_ONE_USERS_USECASE = 'UPDATE_ONE_USERS_USECASE';

@Injectable()
export class UpdateOneUserUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async handle(dto: UpdateOneUserDTO) {
    try {
      const user = await this.userRepository.findOneById(dto.id);
      if (!user) throw new Error('user not found');

      return await this.userRepository.updateOne(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
