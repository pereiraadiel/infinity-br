import { Entity } from './entity';

export class ProductEntity extends Entity {
  name: string;
  weight: number;

  constructor(entity: Omit<ProductEntity, 'createdAt' | 'id'>, id?: string) {
    super(entity, id);
    Object.assign(this, entity);
  }
}
