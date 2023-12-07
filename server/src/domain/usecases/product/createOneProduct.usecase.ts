import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../repositories/product.repository';
import { CreateOneProductDTO } from '../../dtos/product/createOneProduct.dto';
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { CatchExceptions } from '../catchExceptions';

export const CREATE_ONE_PRODUCT_USECASE = 'CREATE_ONE_PRODUCT_USECASE';

@Injectable()
export class CreateOneProductUsecase {
  private SERVICE_NAME = 'Create One Product Usecase';
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async handle(dto: CreateOneProductDTO) {
    try {
      const product = await this.productRepository.findOneByName(dto.name);
      if (product) throw new AlreadyExistsException([], this.SERVICE_NAME);

      return await this.productRepository.createOne(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
