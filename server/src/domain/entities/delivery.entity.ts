import { Entity } from './entity';
import { ShippingEntity } from './shipping.entity';
import { UserEntity } from './user.entity';

export class DeliveryEntity extends Entity {
  price: number;
  deliveryman: UserEntity;
  shipping: ShippingEntity;

  constructor(entity: Omit<DeliveryEntity, 'createdAt' | 'id'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
