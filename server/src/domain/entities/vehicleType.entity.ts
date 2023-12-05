import { Entity } from './entity';

export class VehicleTypeEntity extends Entity {
  name: string;
  weight: number;

  constructor(
    entity: Omit<VehicleTypeEntity, 'createdAt' | 'id'>,
    id?: string,
  ) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
