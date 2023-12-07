import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { FindManyUsersDTO } from '../../dtos/user/findManyUsers.dto';
import { CatchExceptions } from '../catchExceptions';

export const FIND_MANY_USERS_USECASE = 'FIND_MANY_USERS_USECASE';

@Injectable()
export class FindManyUsersUsecase {
  private SERVICE_NAME = 'Find Many Users Usecase';

  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async handle(dto: FindManyUsersDTO) {
    try {
      const users = await this.userRepository.findMany(dto);
      return users.map((user) => {
        delete user.password;
        return user;
      });
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
