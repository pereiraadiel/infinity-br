import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { FindManyUsersDTO } from '../../dtos/user/findManyUsers.dto';

@Injectable()
export class FindManyUsersUsecase {
  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async handle(dto: FindManyUsersDTO) {
    try {
      return await this.userRepository.findMany(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
