import { Inject, Injectable } from '@nestjs/common';
import {
  DELIVERY_REPOSITORY,
  DeliveryRepository,
} from '../../repositories/delivery.repository';
import { CreateOneDeliveryDTO } from '../../dtos/delivery/createOneDelivery.dto';
import { CatchExceptions } from '../catchExceptions';
import {
  SHIPPING_REPOSITORY,
  ShippingRepository,
} from '../../repositories/shipping.repository';
import { calculateDeliveryPrice } from '../../utils/price.util';
import { NotFoundException } from '../../exceptions/notFound.exception';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';

export const CREATE_ONE_DELIVERY_USECASE = 'CREATE_ONE_DELIVERY_USECASE';

@Injectable()
export class CreateOneDeliveryUsecase {
  private SERVICE_NAME = 'Create One Delivery Usecase';
  constructor(
    @Inject(DELIVERY_REPOSITORY)
    private readonly deliveryRepository: DeliveryRepository,
    @Inject(SHIPPING_REPOSITORY)
    private readonly shippingRepository: ShippingRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async handle(dto: CreateOneDeliveryDTO) {
    try {
      const user = await this.userRepository.findOneById(dto.deliverymanId);
      if (!user)
        throw new NotFoundException(
          [
            {
              message: 'entregador não encontrado',
            },
          ],
          this.SERVICE_NAME,
        );

      const shipping = await this.shippingRepository.findOneById(
        dto.shippingId,
      );

      if (!shipping)
        throw new NotFoundException(
          [
            {
              message: 'demanda de entrega (shipping) nao encontrada',
            },
          ],
          this.SERVICE_NAME,
        );

      const deliveryPrice = calculateDeliveryPrice(shipping);

      return await this.deliveryRepository.createOne(dto, deliveryPrice);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
