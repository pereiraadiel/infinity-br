import { CreateOneDeliveryDTO } from '../dtos/delivery/createOneDelivery.dto';
import { FindManyDeliveriesDTO } from '../dtos/delivery/findManyDeliveries.dto';
import { UpdateOneDeliveryDTO } from '../dtos/delivery/updateOneDelivery.dto';
import { DeliveryEntity } from '../entities/delivery.entity';

export interface DeliveryRepository {
  createOne(dto: CreateOneDeliveryDTO): Promise<DeliveryEntity>;
  findMany(dto: FindManyDeliveriesDTO): Promise<DeliveryEntity[]>;
  findOneById(id: string): Promise<DeliveryEntity | null>;
  updateOne(dto: UpdateOneDeliveryDTO): Promise<DeliveryEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
