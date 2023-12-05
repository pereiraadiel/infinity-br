import { Inject, Injectable } from '@nestjs/common';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';
import { UpdateOneShippingDTO } from '../../dtos/shipping/updateOneShipping.dto';

export const UPDATE_ONE_SHIPPING_USECASE = 'UPDATE_ONE_SHIPPING_USECASE';

@Injectable()
export class UpdateOneShippingUsecase {
  constructor(
    @Inject(SHIPPING_REPOSITORY)
    private readonly shippingRepository: ShippingRepository,
  ) {}

  async handle(dto: UpdateOneShippingDTO) {
    try {
      const shipping = await this.shippingRepository.findOneById(dto.id);
      if (!shipping) throw new Error('shipping not found');

      return await this.shippingRepository.updateOne(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
