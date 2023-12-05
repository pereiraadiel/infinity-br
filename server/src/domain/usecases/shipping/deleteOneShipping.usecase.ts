import { Inject, Injectable } from '@nestjs/common';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';

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
