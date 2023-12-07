import { Injectable } from '@nestjs/common';
import { CreateOneShippingDTO } from '../../domain/dtos/shipping/createOneShipping.dto';
import { FindManyShippingsDTO } from '../../domain/dtos/shipping/findManyShippings.dto';
import { UpdateOneShippingDTO } from '../../domain/dtos/shipping/updateOneShipping.dto';
import { ShippingEntity } from '../../domain/entities/shipping.entity';
import { ShippingRepository } from '../../domain/repositories/shipping.repository';
import { PrismaProvider } from '../providers/prisma.provider';
import { ShippingStatusEnum } from '../../domain/enums/shippingStatus.enum';

@Injectable()
export class ShippingConcreteRepository implements ShippingRepository {
  constructor(private readonly database: PrismaProvider) {}

  async createOne(dto: CreateOneShippingDTO): Promise<ShippingEntity> {
    const entity = new ShippingEntity({
      ...dto,
      status: ShippingStatusEnum.created,
    });

    const shipping = await this.database.shipping.create({
      data: {
        id: entity.id,
        distanceInMeters: entity.distanceInMeters,
        status: entity.status,
        product: {
          connect: {
            id: entity.product.id,
          },
        },
        delivery: {
          connect: {
            id: entity.delivery.id,
          },
        },
        vehicleType: {
          connect: {
            id: entity.vehicleType.id,
          },
        },
        createdAt: entity.createdAt,
      },
      include: {
        product: true,
        delivery: true,
        vehicleType: true,
      },
    });

    return shipping as unknown as ShippingEntity;
  }

  async findMany(dto: FindManyShippingsDTO): Promise<ShippingEntity[]> {
    return await this.database.shipping.findMany({
      where: dto,
    });
  }

  async findOneById(id: string): Promise<ShippingEntity> {
    const shipping = await this.database.shipping.findUnique({
      where: {
        id,
      },
      include: {
        product: true,
        delivery: true,
        vehicleType: true,
      },
    });

    return shipping as unknown as ShippingEntity;
  }

  async updateOne(dto: UpdateOneShippingDTO): Promise<ShippingEntity> {
    const shipping = await this.database.shipping.update({
      where: {
        id: dto.id,
      },
      data: {
        status: dto.status,
        distanceInMeters: dto.distanceInMeters,
      },
      include: {
        product: true,
        delivery: true,
        vehicleType: true,
      },
    });

    return shipping as unknown as ShippingEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.shipping.delete({
      where: {
        id,
      },
    });
  }
}
