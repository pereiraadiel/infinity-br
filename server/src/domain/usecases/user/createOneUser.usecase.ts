import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { CreateOneUserDTO } from '../../dtos/user/createOneUser.dto';

export const CREATE_ONE_USER_USECASE = 'CREATE_ONE_USER_USECASE';

@Injectable()
export class CreateOneUserUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async handle(dto: CreateOneUserDTO) {
    try {
      const user = await this.userRepository.findOneByEmail(dto.email);
      if (user) throw new Error('user already exists');

      return await this.userRepository.createOne(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
