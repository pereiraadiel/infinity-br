import { ShippingSituationEnum } from '../enums/shippingSituation.enum';
import { DeliveryEntity } from './delivery.entity';
import { Entity } from './entity';

export class ShippingEntity extends Entity {
  distanceInMeters: number;
  situation: ShippingSituationEnum;
  vehicleType: VehicleTypeEntity;
  product: ProductEntity;
  delivery: DeliveryEntity;

  constructor(entity: Omit<ShippingEntity, 'createdAt' | 'id'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
