import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../repositories/product.repository';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const DELETE_ONE_PRODUCT_USECASE = 'DELETE_ONE_PRODUCT_USECASE';

@Injectable()
export class DeleteOneProductUsecase {
  private SERVICE_NAME = 'Delete One Product Usecase';

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async handle(id: string) {
    try {
      const product = await this.productRepository.findOneById(id);
      if (!product) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.productRepository.deleteOneById(id);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
