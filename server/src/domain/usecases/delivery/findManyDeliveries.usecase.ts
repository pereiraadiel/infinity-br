import { Inject, Injectable } from '@nestjs/common';
import {
  DELIVERY_REPOSITORY,
  DeliveryRepository,
} from '../../repositories/delivery.repository';
import { FindManyDeliveriesDTO } from '../../dtos/delivery/findManyDeliveries.dto';
import { CatchExceptions } from '../catchExceptions';

export const FIND_MANY_DELIVERIES_USECASE = 'FIND_MANY_DELIVERIES_USECASE';

@Injectable()
export class FindManyDeliveriesUsecase {
  private SERVICE_NAME = 'Find Many Deliveries Usecase';

  constructor(
    @Inject(DELIVERY_REPOSITORY)
    private readonly deliveryRepository: DeliveryRepository,
  ) {}

  async handle(dto: FindManyDeliveriesDTO) {
    try {
      return await this.deliveryRepository.findMany(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
