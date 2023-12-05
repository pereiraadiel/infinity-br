import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_ONE_PRODUCT_USECASE,
  CreateOneProductUsecase,
} from '../usecases/product/createOneProduct.usecase';
import {
  FIND_MANY_PRODUCTS_USECASE,
  FindManyProductsUsecase,
} from '../usecases/product/findManyProducts.usecase';
import {
  UPDATE_ONE_PRODUCTS_USECASE,
  UpdateOneProductUsecase,
} from '../usecases/product/updateOneProduct.usecase';
import {
  DELETE_ONE_PRODUCT_USECASE,
  DeleteOneProductUsecase,
} from '../usecases/product/deleteOneProduct.usecase';
import { CreateOneProductDTO } from '../dtos/product/createOneProduct.dto';
import { FindManyProductsDTO } from '../dtos/product/findManyProducts.dto';
import { UpdateOneProductDTO } from '../dtos/product/updateOneProduct.dto';

export const PRODUCT_SERVICE = 'PRODUCT_SERVICE';

@Injectable()
export class ProductService {
  constructor(
    @Inject(CREATE_ONE_PRODUCT_USECASE)
    private readonly createOneProductUsecase: CreateOneProductUsecase,
    @Inject(FIND_MANY_PRODUCTS_USECASE)
    private readonly findManyProductsUsecase: FindManyProductsUsecase,
    @Inject(UPDATE_ONE_PRODUCTS_USECASE)
    private readonly updateOneProductUsecase: UpdateOneProductUsecase,
    @Inject(DELETE_ONE_PRODUCT_USECASE)
    private readonly deleteOneProductUsecase: DeleteOneProductUsecase,
  ) {}

  async createOne(dto: CreateOneProductDTO) {
    return this.createOneProductUsecase.handle(dto);
  }

  async findMany(dto: FindManyProductsDTO) {
    return this.findManyProductsUsecase.handle(dto);
  }

  async updateOne(dto: UpdateOneProductDTO) {
    return this.updateOneProductUsecase.handle(dto);
  }

  async deleteOne(id: string) {
    return this.deleteOneProductUsecase.handle(id);
  }
}
