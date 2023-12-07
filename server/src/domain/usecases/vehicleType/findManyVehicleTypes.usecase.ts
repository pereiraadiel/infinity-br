import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';
import { FindManyVehicleTypesDTO } from '../../dtos/vehicleType/findManyVehicleTypes.dto';
import { CatchExceptions } from '../catchExceptions';

export const FIND_MANY_VEHICLE_TYPES_USECASE =
  'FIND_MANY_VEHICLE_TYPES_USECASE';

@Injectable()
export class FindManyVehicleTypesUsecase {
  private SERVICE_NAME = 'Find Many VehicleTypes Usecase';

  constructor(
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: FindManyVehicleTypesDTO) {
    try {
      return await this.vehicleTypeRepository.findMany(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
