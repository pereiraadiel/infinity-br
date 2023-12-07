import { Entity } from './entity';
import { ShippingEntity } from './shipping.entity';

export class ProductEntity extends Entity {
  name: string;
  weight: number;
  shippings?: ShippingEntity[];

  constructor(
    entity: Omit<ProductEntity, 'weight' | 'createdAt' | 'id'>,
    id?: string,
  ) {
    super(entity, id);
    Object.assign(this, entity);
    if (!this.weight) this.weight = 1;
    if (!this.shippings) this.shippings = [];
  }
}
