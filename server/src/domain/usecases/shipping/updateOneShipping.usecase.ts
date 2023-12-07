import { Inject, Injectable } from '@nestjs/common';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';
import { UpdateOneShippingDTO } from '../../dtos/shipping/updateOneShipping.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const UPDATE_ONE_SHIPPING_USECASE = 'UPDATE_ONE_SHIPPING_USECASE';

@Injectable()
export class UpdateOneShippingUsecase {
  private SERVICE_NAME = 'Update One Shipping Usecase';

  constructor(
    @Inject(SHIPPING_REPOSITORY)
    private readonly shippingRepository: ShippingRepository,
  ) {}

  async handle(dto: UpdateOneShippingDTO) {
    try {
      const shipping = await this.shippingRepository.findOneById(dto.id);
      if (!shipping) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.shippingRepository.updateOne(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
