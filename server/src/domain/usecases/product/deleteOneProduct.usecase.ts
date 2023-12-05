import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../repositories/product.repository';

@Injectable()
export class DeleteOneProductUsecase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async handle(id: string) {
    try {
      const product = await this.productRepository.findOneById(id);
      if (!product) throw new Error('product not found');

      return await this.productRepository.deleteOneById(id);
    } catch (error) {
      console.error(error);
    }
  }
}
