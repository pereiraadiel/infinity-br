import { Inject, Injectable } from '@nestjs/common';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';
import { FindManyShippingsDTO } from '../../dtos/shipping/findManyShippings.dto';
import { CatchExceptions } from '../catchExceptions';

export const FIND_MANY_SHIPPINGS_USECASE = 'FIND_MANY_SHIPPINGS_USECASE';

@Injectable()
export class FindManyShippingsUsecase {
  private SERVICE_NAME = 'Find Many Shippings Usecase';

  constructor(
    @Inject(SHIPPING_REPOSITORY)
    private readonly shippingRepository: ShippingRepository,
  ) {}

  async handle(dto: FindManyShippingsDTO) {
    try {
      return await this.shippingRepository.findMany(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
