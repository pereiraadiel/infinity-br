import { RoleEnum } from '../enums/role.enum';
import { DeliveryEntity } from './delivery.entity';
import { Entity } from './entity';

export class UserEntity extends Entity {
  name: string;
  email: string;
  password: string;
  role: RoleEnum;
  deliveries?: DeliveryEntity[];

  constructor(entity: Omit<UserEntity, 'createdAt' | 'id'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);

    if (!this.deliveries) this.deliveries = [];
  }
}
