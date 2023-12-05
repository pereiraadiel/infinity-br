import { Entity } from './entity';
import { VehicleTypeEntity } from './vehicleType.entity';

export class VehicleEntity extends Entity {
  name: string;
  plate: string;
  type: VehicleTypeEntity;

  constructor(entity: Omit<VehicleEntity, 'createdAt' | 'id'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
