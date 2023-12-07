import { Injectable } from '@nestjs/common';
import { CreateOneUserDTO } from '../../domain/dtos/user/createOneUser.dto';
import { FindManyUsersDTO } from '../../domain/dtos/user/findManyUsers.dto';
import { UpdateOneUserDTO } from '../../domain/dtos/user/updateOneUser.dto';
import { UserEntity } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class UserConcreteRepository implements UserRepository {
  constructor(private readonly database: PrismaProvider) {}

  async createOne(dto: CreateOneUserDTO): Promise<UserEntity> {
    const entity = new UserEntity({
      ...dto,
    });

    const user = await this.database.user.create({
      data: {
        id: entity.id,
        name: entity.name,
        email: entity.email,
        password: entity.password,
        role: entity.role,
        createdAt: entity.createdAt,
      },
      include: {
        deliveries: true,
      },
    });

    return user as unknown as UserEntity;
  }

  async findMany(dto: FindManyUsersDTO): Promise<UserEntity[]> {
    return await this.database.user.findMany({
      where: dto,
    });
  }

  async findOneById(id: string): Promise<UserEntity> {
    const user = await this.database.user.findUnique({
      where: {
        id,
      },
      include: {
        deliveries: true,
      },
    });

    return user as unknown as UserEntity;
  }

  async findOneByEmail(email: string): Promise<UserEntity> {
    const user = await this.database.user.findUnique({
      where: {
        email,
      },
      include: {
        deliveries: true,
      },
    });

    return user as unknown as UserEntity;
  }

  async updateOne(dto: UpdateOneUserDTO): Promise<UserEntity> {
    const user = await this.database.user.update({
      where: {
        id: dto.id,
      },
      data: {
        name: dto.name,
        email: dto.email,
        password: dto.password,
        role: dto.role,
      },
      include: {
        deliveries: true,
      },
    });

    return user as unknown as UserEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.user.delete({
      where: {
        id,
      },
    });
  }
}
