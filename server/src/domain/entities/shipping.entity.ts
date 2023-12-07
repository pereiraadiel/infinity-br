import { Entity } from './entity';
import { DeliveryEntity } from './delivery.entity';
import { ProductEntity } from './product.entity';
import { VehicleTypeEntity } from './vehicleType.entity';
import { ShippingStatusEnum } from '../enums/shippingStatus.enum';

export class ShippingEntity extends Entity {
  distanceInMeters: number;
  status: ShippingStatusEnum;
  vehicleType?: VehicleTypeEntity;
  product?: ProductEntity;
  delivery?: DeliveryEntity;

  constructor(entity: Omit<ShippingEntity, 'createdAt' | 'id'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
