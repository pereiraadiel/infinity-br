import { CreateOneShippingDTO } from '../dtos/shipping/createOneShipping.dto';
import { FindManyShippingsDTO } from '../dtos/shipping/findManyShippings.dto';
import { UpdateOneShippingDTO } from '../dtos/shipping/updateOneShipping.dto';
import { ShippingEntity } from '../entities/shipping.entity';

export const SHIPPING_REPOSITORY = 'SHIPPING_REPOSITORY';

export interface ShippingRepository {
  createOne(dto: CreateOneShippingDTO): Promise<ShippingEntity>;
  findMany(dto: FindManyShippingsDTO): Promise<ShippingEntity[]>;
  findOneById(id: string): Promise<ShippingEntity | null>;
  updateOne(dto: UpdateOneShippingDTO): Promise<ShippingEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
