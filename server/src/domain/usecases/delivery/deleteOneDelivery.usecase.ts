import { Inject, Injectable } from '@nestjs/common';
import {
  DELIVERY_REPOSITORY,
  DeliveryRepository,
} from '../../repositories/delivery.repository';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const DELETE_ONE_DELIVERY_USECASE = 'DELETE_ONE_DELIVERY_USECASE';

@Injectable()
export class DeleteOneDeliveryUsecase {
  private SERVICE_NAME = 'Delete One Delivery Usecase';

  constructor(
    @Inject(DELIVERY_REPOSITORY)
    private readonly deliveryRepository: DeliveryRepository,
  ) {}

  async handle(id: string) {
    try {
      const delivery = await this.deliveryRepository.findOneById(id);
      if (!delivery) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.deliveryRepository.deleteOneById(id);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
