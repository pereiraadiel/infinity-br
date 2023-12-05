import { CreateOneProductDTO } from '../dtos/product/createOneProduct.dto';
import { FindManyProductsDTO } from '../dtos/product/findManyProducts.dto';
import { UpdateOneProductDTO } from '../dtos/product/updateOneProduct.dto';
import { ProductEntity } from '../entities/product.entity';

export const PRODUCT_REPOSITORY = 'PRODUCT_REPOSITORY';

export interface ProductRepository {
  createOne(dto: CreateOneProductDTO): Promise<ProductEntity>;
  findMany(dto: FindManyProductsDTO): Promise<ProductEntity[]>;
  findOneById(id: string): Promise<ProductEntity | null>;
  findOneByName(name: string): Promise<ProductEntity | null>;
  updateOne(dto: UpdateOneProductDTO): Promise<ProductEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
