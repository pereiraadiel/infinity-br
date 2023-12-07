import { Inject, Injectable } from '@nestjs/common';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../repositories/product.repository';
import { UpdateOneProductDTO } from '../../dtos/product/updateOneProduct.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { CatchExceptions } from '../catchExceptions';

export const UPDATE_ONE_PRODUCT_USECASE = 'UPDATE_ONE_PRODUCT_USECASE';

@Injectable()
export class UpdateOneProductUsecase {
  private SERVICE_NAME = 'Update One Product Usecase';

  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
  ) {}

  async handle(dto: UpdateOneProductDTO) {
    try {
      const product = await this.productRepository.findOneById(dto.id);
      if (!product) throw new NotFoundException([], this.SERVICE_NAME);

      if (dto.name !== undefined) {
        const productNameExists = await this.productRepository.findOneByName(
          dto.name,
        );
        if (productNameExists)
          throw new AlreadyExistsException(
            [
              {
                message: 'já existe um produto com o mesmo nome',
              },
            ],
            this.SERVICE_NAME,
          );
        return await this.productRepository.updateOne(dto);
      } else {
        return await this.productRepository.updateOne(dto);
      }
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
