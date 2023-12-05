import { CreateOneUserDTO } from '../dtos/user/createOneUser.dto';
import { FindManyUsersDTO } from '../dtos/user/findManyUsers.dto';
import { UpdateOneUserDTO } from '../dtos/user/updateOneUser.dto';
import { UserEntity } from '../entities/user.entity';

export interface UserRepository {
  createOne(dto: CreateOneUserDTO): Promise<UserEntity>;
  findMany(dto: FindManyUsersDTO): Promise<UserEntity[]>;
  findOneById(id: string): Promise<UserEntity | null>;
  updateOne(dto: UpdateOneUserDTO): Promise<UserEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
