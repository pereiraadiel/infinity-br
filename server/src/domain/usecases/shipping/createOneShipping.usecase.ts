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

export const CREATE_ONE_SHIPPING_USECASE = 'CREATE_ONE_SHIPPING_USECASE';

@Injectable()
export class CreateOneShippingUsecase {
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
      if (!product) throw new Error('product not found');

      const vehicleType = await this.vehicleTypeRepository.findOneById(
        dto.vehicleTypeId,
      );
      if (!vehicleType) throw new Error('vehicleType not found');

      return await this.shippingRepository.createOne(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
