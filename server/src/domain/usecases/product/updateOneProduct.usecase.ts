import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../repositories/product.repository';
import { UpdateOneProductDTO } from '../../dtos/product/updateOneProduct.dto';

@Injectable()
export class UpdateOneProductUsecase {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async handle(dto: UpdateOneProductDTO) {
    try {
      const product = await this.productRepository.findOneById(dto.id);
      if (!product) throw new Error('product not found');

      if (dto.name !== undefined) {
        const productNameExists = await this.productRepository.findOneByName(
          dto.name,
        );
        if (productNameExists)
          throw new Error('product with given name already exist');
        return await this.productRepository.updateOne(dto);
      } else {
        return await this.productRepository.updateOne(dto);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
