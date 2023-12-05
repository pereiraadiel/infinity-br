import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_REPOSITORY,
  VehicleRepository,
} from '../../repositories/vehicle.repository';
import { FindManyVehiclesDTO } from '../../dtos/vehicle/findManyVehicles.dto';

@Injectable()
export class FindManyVehiclesUsecase {
  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async handle(dto: FindManyVehiclesDTO) {
    try {
      return await this.vehicleRepository.findMany(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
