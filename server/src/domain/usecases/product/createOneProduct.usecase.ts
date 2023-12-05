import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../repositories/product.repository';
import { CreateOneProductDTO } from '../../dtos/product/createOneProduct.dto';

export const CREATE_ONE_PRODUCT_USECASE = 'CREATE_ONE_PRODUCT_USECASE';

@Injectable()
export class CreateOneProductUsecase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async handle(dto: CreateOneProductDTO) {
    try {
      const product = await this.productRepository.findOneByName(dto.name);
      if (product) throw new Error('product already exists');

      return await this.productRepository.createOne(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
