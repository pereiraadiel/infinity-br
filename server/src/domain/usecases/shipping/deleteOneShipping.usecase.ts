import { Inject, Injectable } from '@nestjs/common';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const DELETE_ONE_SHIPPING_USECASE = 'DELETE_ONE_SHIPPING_USECASE';

@Injectable()
export class DeleteOneShippingUsecase {
  private SERVICE_NAME = 'Delete One Shipping Usecase';

  constructor(
    @Inject(SHIPPING_REPOSITORY)
    private readonly shippingRepository: ShippingRepository,
  ) {}

  async handle(id: string) {
    try {
      const shipping = await this.shippingRepository.findOneById(id);
      if (!shipping) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.shippingRepository.deleteOneById(id);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
