import { Inject, Injectable } from '@nestjs/common';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { UpdateOneUserDTO } from '../../dtos/user/updateOneUser.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const UPDATE_ONE_USER_USECASE = 'UPDATE_ONE_USER_USECASE';

@Injectable()
export class UpdateOneUserUsecase {
  private SERVICE_NAME = 'Update One User Usecase';

  constructor(
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async handle(dto: UpdateOneUserDTO) {
    try {
      const user = await this.userRepository.findOneById(dto.id);
      if (!user) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.userRepository.updateOne(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
