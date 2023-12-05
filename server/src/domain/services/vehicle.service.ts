import { Inject, Injectable } from '@nestjs/common';
import {
  CREATE_ONE_VEHICLE_USECASE,
  CreateOneVehicleUsecase,
} from '../usecases/vehicle/createOneVehicle.usecase';
import {
  FIND_MANY_VEHICLES_USECASE,
  FindManyVehiclesUsecase,
} from '../usecases/vehicle/findManyVehicles.usecase';
import {
  UPDATE_ONE_VEHICLES_USECASE,
  UpdateOneVehicleUsecase,
} from '../usecases/vehicle/updateOneVehicle.usecase';
import {
  DELETE_ONE_VEHICLE_USECASE,
  DeleteOneVehicleUsecase,
} from '../usecases/vehicle/deleteOneVehicle.usecase';
import { CreateOneVehicleDTO } from '../dtos/vehicle/createOneVehicle.dto';
import { FindManyVehiclesDTO } from '../dtos/vehicle/findManyVehicles.dto';
import { UpdateOneVehicleDTO } from '../dtos/vehicle/updateOneVehicle.dto';

export const VEHICLE_SERVICE = 'VEHICLE_SERVICE';

@Injectable()
export class VehicleService {
  constructor(
    @Inject(CREATE_ONE_VEHICLE_USECASE)
    private readonly createOneVehicleUsecase: CreateOneVehicleUsecase,
    @Inject(FIND_MANY_VEHICLES_USECASE)
    private readonly findManyVehiclesUsecase: FindManyVehiclesUsecase,
    @Inject(UPDATE_ONE_VEHICLES_USECASE)
    private readonly updateOneVehicleUsecase: UpdateOneVehicleUsecase,
    @Inject(DELETE_ONE_VEHICLE_USECASE)
    private readonly deleteOneVehicleUsecase: DeleteOneVehicleUsecase,
  ) {}

  async createOne(dto: CreateOneVehicleDTO) {
    return this.createOneVehicleUsecase.handle(dto);
  }

  async findMany(dto: FindManyVehiclesDTO) {
    return this.findManyVehiclesUsecase.handle(dto);
  }

  async updateOne(dto: UpdateOneVehicleDTO) {
    return this.updateOneVehicleUsecase.handle(dto);
  }

  async deleteOne(id: string) {
    return this.deleteOneVehicleUsecase.handle(id);
  }
}
