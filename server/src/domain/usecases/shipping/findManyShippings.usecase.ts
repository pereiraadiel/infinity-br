import { Inject, Injectable } from '@nestjs/common';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';
import { FindManyShippingsDTO } from '../../dtos/shipping/findManyShippings.dto';

export const FIND_MANY_SHIPPINGS_USECASE = 'FIND_MANY_SHIPPINGS_USECASE';

@Injectable()
export class FindManyShippingsUsecase {
  constructor(
    @Inject(SHIPPING_REPOSITORY)
    private readonly shippingRepository: ShippingRepository,
  ) {}

  async handle(dto: FindManyShippingsDTO) {
    try {
      return await this.shippingRepository.findMany(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
