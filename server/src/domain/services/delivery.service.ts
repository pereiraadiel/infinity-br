import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_ONE_DELIVERY_USECASE,
  CreateOneDeliveryUsecase,
} from '../usecases/delivery/createOneDelivery.usecase';
import {
  FIND_MANY_DELIVERIES_USECASE,
  FindManyDeliveriesUsecase,
} from '../usecases/delivery/findManyDeliveries.usecase';
import {
  UPDATE_ONE_DELIVERY_USECASE,
  UpdateOneDeliveryUsecase,
} from '../usecases/delivery/updateOneDelivery.usecase';
import {
  DELETE_ONE_DELIVERY_USECASE,
  DeleteOneDeliveryUsecase,
} from '../usecases/delivery/deleteOneDelivery.usecase';
import { CreateOneDeliveryDTO } from '../dtos/delivery/createOneDelivery.dto';
import { FindManyDeliveriesDTO } from '../dtos/delivery/findManyDeliveries.dto';
import { UpdateOneDeliveryDTO } from '../dtos/delivery/updateOneDelivery.dto';

export const DELIVERY_SERVICE = 'DELIVERY_SERVICE';

@Injectable()
export class DeliveryService {
  constructor(
    @Inject(CREATE_ONE_DELIVERY_USECASE)
    private readonly createOneDeliveryUsecase: CreateOneDeliveryUsecase,
    @Inject(FIND_MANY_DELIVERIES_USECASE)
    private readonly findManyDeliveriesUsecase: FindManyDeliveriesUsecase,
    @Inject(UPDATE_ONE_DELIVERY_USECASE)
    private readonly updateOneDeliveryUsecase: UpdateOneDeliveryUsecase,
    @Inject(DELETE_ONE_DELIVERY_USECASE)
    private readonly deleteOneDeliveryUsecase: DeleteOneDeliveryUsecase,
  ) {}

  async createOne(dto: CreateOneDeliveryDTO) {
    return this.createOneDeliveryUsecase.handle(dto);
  }

  async findMany(dto: FindManyDeliveriesDTO) {
    return this.findManyDeliveriesUsecase.handle(dto);
  }

  async updateOne(dto: UpdateOneDeliveryDTO) {
    return this.updateOneDeliveryUsecase.handle(dto);
  }

  async deleteOne(id: string) {
    return this.deleteOneDeliveryUsecase.handle(id);
  }
}
