import { Entity } from './entity';
import { ShippingEntity } from './shipping.entity';
import { UserEntity } from './user.entity';
import { DeliveryStatusEnum } from '../enums/deliveryStatus.enum';

export class DeliveryEntity extends Entity {
  price: number;
  status: DeliveryStatusEnum;
  deliveryman?: UserEntity;
  shipping?: ShippingEntity;

  constructor(
    entity: Omit<DeliveryEntity, 'status' | 'createdAt' | 'id'>,
    id?: string,
  ) {
    super(entity, id);
    Object.assign(this, entity);
    this.status = DeliveryStatusEnum.oncourse;
  }
}
