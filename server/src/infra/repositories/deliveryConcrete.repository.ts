import { Injectable } from '@nestjs/common';
import { CreateOneDeliveryDTO } from '../../domain/dtos/delivery/createOneDelivery.dto';
import { FindManyDeliveriesDTO } from '../../domain/dtos/delivery/findManyDeliveries.dto';
import { UpdateOneDeliveryDTO } from '../../domain/dtos/delivery/updateOneDelivery.dto';
import { DeliveryEntity } from '../../domain/entities/delivery.entity';
import { DeliveryRepository } from '../../domain/repositories/delivery.repository';
import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class DeliveryConcreteRepository implements DeliveryRepository {
  constructor(private readonly database: PrismaProvider) {}

  async createOne(
    dto: CreateOneDeliveryDTO,
    price: number,
  ): Promise<DeliveryEntity> {
    const entity = new DeliveryEntity({
      ...dto,
      price,
    });

    const delivery = await this.database.delivery.create({
      data: {
        id: entity.id,
        status: entity.status,
        price,
        deliveryman: {
          connect: {
            id: entity.deliveryman.id,
          },
        },
        shippingId: entity.shipping.id,
        createdAt: entity.createdAt,
      },
      include: {
        deliveryman: true,
        shipping: true,
      },
    });

    return delivery as unknown as DeliveryEntity;
  }

  async findMany(dto: FindManyDeliveriesDTO): Promise<DeliveryEntity[]> {
    return await this.database.delivery.findMany({
      where: {
        OR: [
          {
            status: dto.status,
          },
          {
            deliveryman: {
              id: dto.deliverymanId,
            },
          },
        ],
      },
    });
  }

  async findOneById(id: string): Promise<DeliveryEntity> {
    const delivery = await this.database.delivery.findUnique({
      where: {
        id,
      },
      include: {
        deliveryman: true,
        shipping: true,
      },
    });

    return delivery as unknown as DeliveryEntity;
  }

  async updateOne(dto: UpdateOneDeliveryDTO): Promise<DeliveryEntity> {
    const delivery = await this.database.delivery.update({
      where: {
        id: dto.id,
      },
      data: {
        status: dto.status,
        price: dto.price,
      },
      include: {
        deliveryman: true,
        shipping: true,
      },
    });

    return delivery as unknown as DeliveryEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.delivery.delete({
      where: {
        id,
      },
    });
  }
}
