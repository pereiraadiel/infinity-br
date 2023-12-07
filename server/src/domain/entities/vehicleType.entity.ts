import { ShippingEntity } from './shipping.entity';
import { Entity } from './entity';
import { VehicleEntity } from './vehicle.entity';

export class VehicleTypeEntity extends Entity {
  name: string;
  weight: number;
  vehicles?: VehicleEntity[];
  shippings?: ShippingEntity[];

  constructor(
    entity: Omit<VehicleTypeEntity, 'createdAt' | 'id'>,
    id?: string,
  ) {
    super(entity, id);
    Object.assign(this, entity);

    if (!this.vehicles) this.vehicles = [];
    if (!this.shippings) this.shippings = [];
  }
}
