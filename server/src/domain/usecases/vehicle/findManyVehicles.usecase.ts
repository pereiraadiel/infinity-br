import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_REPOSITORY,
  VehicleRepository,
} from '../../repositories/vehicle.repository';
import { FindManyVehiclesDTO } from '../../dtos/vehicle/findManyVehicles.dto';
import { CatchExceptions } from '../catchExceptions';

export const FIND_MANY_VEHICLES_USECASE = 'FIND_MANY_VEHICLES_USECASE';

@Injectable()
export class FindManyVehiclesUsecase {
  private SERVICE_NAME = 'Find Many Vehicles Usecase';

  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async handle(dto: FindManyVehiclesDTO) {
    try {
      return await this.vehicleRepository.findMany(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
