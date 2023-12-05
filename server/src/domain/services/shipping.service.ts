import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_ONE_SHIPPING_USECASE,
  CreateOneShippingUsecase,
} from '../usecases/shipping/createOneShipping.usecase';
import {
  FIND_MANY_SHIPPINGS_USECASE,
  FindManyShippingsUsecase,
} from '../usecases/shipping/findManyShippings.usecase';
import {
  UPDATE_ONE_SHIPPING_USECASE,
  UpdateOneShippingUsecase,
} from '../usecases/shipping/updateOneShipping.usecase';
import {
  DELETE_ONE_SHIPPING_USECASE,
  DeleteOneShippingUsecase,
} from '../usecases/shipping/deleteOneShipping.usecase';
import { CreateOneShippingDTO } from '../dtos/shipping/createOneShipping.dto';
import { FindManyShippingsDTO } from '../dtos/shipping/findManyShippings.dto';
import { UpdateOneShippingDTO } from '../dtos/shipping/updateOneShipping.dto';

export const SHIPPING_SERVICE = 'SHIPPING_SERVICE';

@Injectable()
export class ShippingService {
  constructor(
    @Inject(CREATE_ONE_SHIPPING_USECASE)
    private readonly createOneShippingUsecase: CreateOneShippingUsecase,
    @Inject(FIND_MANY_SHIPPINGS_USECASE)
    private readonly findManyShippingsUsecase: FindManyShippingsUsecase,
    @Inject(UPDATE_ONE_SHIPPING_USECASE)
    private readonly updateOneShippingUsecase: UpdateOneShippingUsecase,
    @Inject(DELETE_ONE_SHIPPING_USECASE)
    private readonly deleteOneShippingUsecase: DeleteOneShippingUsecase,
  ) {}

  async createOne(dto: CreateOneShippingDTO) {
    return this.createOneShippingUsecase.handle(dto);
  }

  async findMany(dto: FindManyShippingsDTO) {
    return this.findManyShippingsUsecase.handle(dto);
  }

  async updateOne(dto: UpdateOneShippingDTO) {
    return this.updateOneShippingUsecase.handle(dto);
  }

  async deleteOne(id: string) {
    return this.deleteOneShippingUsecase.handle(id);
  }
}
