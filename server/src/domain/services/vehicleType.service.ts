import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_ONE_VEHICLE_TYPE_USECASE,
  CreateOneVehicleTypeUsecase,
} from '../usecases/vehicleType/createOneVehicleType.usecase';
import {
  FIND_MANY_VEHICLE_TYPES_USECASE,
  FindManyVehicleTypesUsecase,
} from '../usecases/vehicleType/findManyVehicleTypes.usecase';
import {
  UPDATE_ONE_VEHICLE_TYPE_USECASE,
  UpdateOneVehicleTypeUsecase,
} from '../usecases/vehicleType/updateOneVehicleType.usecase';
import {
  DELETE_ONE_VEHICLE_TYPE_USECASE,
  DeleteOneVehicleTypeUsecase,
} from '../usecases/vehicleType/deleteOneVehicleType.usecase';
import { CreateOneVehicleTypeDTO } from '../dtos/vehicleType/createOneVehicleType.dto';
import { FindManyVehicleTypesDTO } from '../dtos/vehicleType/findManyVehicleTypes.dto';
import { UpdateOneVehicleTypeDTO } from '../dtos/vehicleType/updateOneVehicleType.dto';

export const VEHICLE_TYPE_SERVICE = 'VEHICLE_TYPE_SERVICE';

@Injectable()
export class VehicleTypeService {
  constructor(
    @Inject(CREATE_ONE_VEHICLE_TYPE_USECASE)
    private readonly createOneVehicleTypeUsecase: CreateOneVehicleTypeUsecase,
    @Inject(FIND_MANY_VEHICLE_TYPES_USECASE)
    private readonly findManyVehicleTypesUsecase: FindManyVehicleTypesUsecase,
    @Inject(UPDATE_ONE_VEHICLE_TYPE_USECASE)
    private readonly updateOneVehicleTypeUsecase: UpdateOneVehicleTypeUsecase,
    @Inject(DELETE_ONE_VEHICLE_TYPE_USECASE)
    private readonly deleteOneVehicleTypeUsecase: DeleteOneVehicleTypeUsecase,
  ) {}

  async createOne(dto: CreateOneVehicleTypeDTO) {
    return this.createOneVehicleTypeUsecase.handle(dto);
  }

  async findMany(dto: FindManyVehicleTypesDTO) {
    return this.findManyVehicleTypesUsecase.handle(dto);
  }

  async updateOne(dto: UpdateOneVehicleTypeDTO) {
    return this.updateOneVehicleTypeUsecase.handle(dto);
  }

  async deleteOne(id: string) {
    return this.deleteOneVehicleTypeUsecase.handle(id);
  }
}
