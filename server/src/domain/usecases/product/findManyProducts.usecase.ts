import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../repositories/product.repository';
import { FindManyProductsDTO } from '../../dtos/product/findManyProducts.dto';
import { CatchExceptions } from '../catchExceptions';

export const FIND_MANY_PRODUCTS_USECASE = 'FIND_MANY_PRODUCTS_USECASE';

@Injectable()
export class FindManyProductsUsecase {
  private SERVICE_NAME = 'Find Many Products Usecase';

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async handle(dto: FindManyProductsDTO) {
    try {
      return await this.productRepository.findMany(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
