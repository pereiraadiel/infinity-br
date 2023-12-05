import { Inject, Injectable } from '@nestjs/common';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';

export const DELETE_ONE_SHIPPING_USECASE = 'DELETE_ONE_SHIPPING_USECASE';

@Injectable()
export class DeleteOneShippingUsecase {
  constructor(
    @Inject(SHIPPING_REPOSITORY)
    private readonly shippingRepository: ShippingRepository,
  ) {}

  async handle(id: string) {
    try {
      const shipping = await this.shippingRepository.findOneById(id);
      if (!shipping) throw new Error('shipping not found');

      return await this.shippingRepository.deleteOneById(id);
    } catch (error) {
      console.error(error);
    }
  }
}
