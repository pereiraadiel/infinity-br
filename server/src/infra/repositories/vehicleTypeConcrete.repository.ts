import { Injectable } from '@nestjs/common';
import { CreateOneVehicleTypeDTO } from '../../domain/dtos/vehicleType/createOneVehicleType.dto';
import { FindManyVehicleTypesDTO } from '../../domain/dtos/vehicleType/findManyVehicleTypes.dto';
import { UpdateOneVehicleTypeDTO } from '../../domain/dtos/vehicleType/updateOneVehicleType.dto';
import { VehicleTypeEntity } from '../../domain/entities/vehicleType.entity';
import { VehicleTypeRepository } from '../../domain/repositories/vehicleType.repository';
import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class VehicleTypeConcreteRepository implements VehicleTypeRepository {
  constructor(private readonly database: PrismaProvider) {}

  async createOne(dto: CreateOneVehicleTypeDTO): Promise<VehicleTypeEntity> {
    const entity = new VehicleTypeEntity({
      ...dto,
      weight: dto.weight!,
    });

    const vehicleType = await this.database.vehicleType.create({
      data: {
        id: entity.id,
        name: entity.name,
        weight: entity.weight,
        createdAt: entity.createdAt,
      },
      include: {
        vehicles: true,
        shippings: true,
      },
    });

    return vehicleType as unknown as VehicleTypeEntity;
  }

  async findMany(dto: FindManyVehicleTypesDTO): Promise<VehicleTypeEntity[]> {
    return await this.database.vehicleType.findMany({
      where: dto,
    });
  }

  async findOneById(id: string): Promise<VehicleTypeEntity> {
    const vehicleType = await this.database.vehicleType.findUnique({
      where: {
        id,
      },
      include: {
        vehicles: true,
        shippings: true,
      },
    });

    return vehicleType as unknown as VehicleTypeEntity;
  }

  async findOneByName(name: string): Promise<VehicleTypeEntity> {
    const vehicleType = await this.database.vehicleType.findUnique({
      where: {
        name,
      },
      include: {
        vehicles: true,
        shippings: true,
      },
    });

    return vehicleType as unknown as VehicleTypeEntity;
  }

  async updateOne(dto: UpdateOneVehicleTypeDTO): Promise<VehicleTypeEntity> {
    const vehicleType = await this.database.vehicleType.update({
      where: {
        id: dto.id,
      },
      data: {
        name: dto.name,
      },
      include: {
        vehicles: true,
        shippings: true,
      },
    });

    return vehicleType as unknown as VehicleTypeEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.vehicleType.delete({
      where: {
        id,
      },
    });
  }
}
