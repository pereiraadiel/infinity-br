import { Inject, Injectable } from '@nestjs/common';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';
import { CreateOneShippingDTO } from '../../dtos/shipping/createOneShipping.dto';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../repositories/product.repository';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const CREATE_ONE_SHIPPING_USECASE = 'CREATE_ONE_SHIPPING_USECASE';

@Injectable()
export class CreateOneShippingUsecase {
  private SERVICE_NAME = 'Create One Shipping Usecase';

  constructor(
    @Inject(SHIPPING_REPOSITORY)
    private readonly shippingRepository: ShippingRepository,
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: ProductRepository,
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: CreateOneShippingDTO) {
    try {
      const product = await this.productRepository.findOneById(dto.productId);
      if (!product)
        throw new NotFoundException(
          [
            {
              message: 'produto não encontrado',
            },
          ],
          this.SERVICE_NAME,
        );

      const vehicleType = await this.vehicleTypeRepository.findOneById(
        dto.vehicleTypeId,
      );
      if (!vehicleType)
        throw new NotFoundException(
          [
            {
              message: 'tipo de veiculo não encontrado',
            },
          ],
          this.SERVICE_NAME,
        );

      return await this.shippingRepository.createOne(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
