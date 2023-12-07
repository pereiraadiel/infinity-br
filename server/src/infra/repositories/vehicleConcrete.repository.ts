import { Injectable } from '@nestjs/common';
import { CreateOneVehicleDTO } from '../../domain/dtos/vehicle/createOneVehicle.dto';
import { FindManyVehiclesDTO } from '../../domain/dtos/vehicle/findManyVehicles.dto';
import { UpdateOneVehicleDTO } from '../../domain/dtos/vehicle/updateOneVehicle.dto';
import { VehicleEntity } from '../../domain/entities/vehicle.entity';
import { VehicleRepository } from '../../domain/repositories/vehicle.repository';
import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class VehicleConcreteRepository implements VehicleRepository {
  constructor(private readonly database: PrismaProvider) {}

  async createOne(dto: CreateOneVehicleDTO): Promise<VehicleEntity> {
    const entity = new VehicleEntity({
      ...dto,
      type: { id: dto.vehicleTypeId } as any,
    });

    const vehicle = await this.database.vehicle.create({
      data: {
        id: entity.id,
        name: entity.name,
        plate: entity.plate,
        type: {
          connect: {
            id: entity.type.id,
          },
        },
        createdAt: entity.createdAt,
      },
      include: {
        type: true,
      },
    });

    return vehicle as unknown as VehicleEntity;
  }

  async findMany(dto: FindManyVehiclesDTO): Promise<VehicleEntity[]> {
    return await this.database.vehicle.findMany({
      where: dto,
    });
  }

  async findOneById(id: string): Promise<VehicleEntity> {
    const vehicle = await this.database.vehicle.findUnique({
      where: {
        id,
      },
      include: {
        type: true,
      },
    });

    return vehicle as unknown as VehicleEntity;
  }

  async findOneByPlate(plate: string): Promise<VehicleEntity> {
    const vehicle = await this.database.vehicle.findUnique({
      where: {
        plate,
      },
      include: {
        type: true,
      },
    });

    return vehicle as unknown as VehicleEntity;
  }

  async updateOne(dto: UpdateOneVehicleDTO): Promise<VehicleEntity> {
    const vehicle = await this.database.vehicle.update({
      where: {
        id: dto.id,
      },
      data: {
        name: dto.name,
      },
      include: {
        type: true,
      },
    });

    return vehicle as unknown as VehicleEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.vehicle.delete({
      where: {
        id,
      },
    });
  }
}
