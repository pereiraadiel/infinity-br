import { Inject, Injectable } from '@nestjs/common';
import {
  DELIVERY_REPOSITORY,
  DeliveryRepository,
} from '../../repositories/delivery.repository';
import { UpdateOneDeliveryDTO } from '../../dtos/delivery/updateOneDelivery.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const UPDATE_ONE_DELIVERY_USECASE = 'UPDATE_ONE_DELIVERY_USECASE';

@Injectable()
export class UpdateOneDeliveryUsecase {
  private SERVICE_NAME = 'Update One Delivery Usecase';

  constructor(
    @Inject(DELIVERY_REPOSITORY)
    private readonly deliveryRepository: DeliveryRepository,
  ) {}

  async handle(dto: UpdateOneDeliveryDTO) {
    try {
      const delivery = await this.deliveryRepository.findOneById(dto.id);
      if (!delivery) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.deliveryRepository.updateOne(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
