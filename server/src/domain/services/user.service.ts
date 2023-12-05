import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_ONE_USER_USECASE,
  CreateOneUserUsecase,
} from '../usecases/user/createOneUser.usecase';
import {
  FIND_MANY_USERS_USECASE,
  FindManyUsersUsecase,
} from '../usecases/user/findManyUsers.usecase';
import {
  UPDATE_ONE_USERS_USECASE,
  UpdateOneUserUsecase,
} from '../usecases/user/updateOneUser.usecase';
import {
  DELETE_ONE_USER_USECASE,
  DeleteOneUserUsecase,
} from '../usecases/user/deleteOneUser.usecase';
import { CreateOneUserDTO } from '../dtos/user/createOneUser.dto';
import { FindManyUsersDTO } from '../dtos/user/findManyUsers.dto';
import { UpdateOneUserDTO } from '../dtos/user/updateOneUser.dto';

export const USER_SERVICE = 'USER_SERVICE';

@Injectable()
export class UserService {
  constructor(
    @Inject(CREATE_ONE_USER_USECASE)
    private readonly createOneUserUsecase: CreateOneUserUsecase,
    @Inject(FIND_MANY_USERS_USECASE)
    private readonly findManyUsersUsecase: FindManyUsersUsecase,
    @Inject(UPDATE_ONE_USERS_USECASE)
    private readonly updateOneUserUsecase: UpdateOneUserUsecase,
    @Inject(DELETE_ONE_USER_USECASE)
    private readonly deleteOneUserUsecase: DeleteOneUserUsecase,
  ) {}

  async createOne(dto: CreateOneUserDTO) {
    return this.createOneUserUsecase.handle(dto);
  }

  async findMany(dto: FindManyUsersDTO) {
    return this.findManyUsersUsecase.handle(dto);
  }

  async updateOne(dto: UpdateOneUserDTO) {
    return this.updateOneUserUsecase.handle(dto);
  }

  async deleteOne(id: string) {
    return this.deleteOneUserUsecase.handle(id);
  }
}
