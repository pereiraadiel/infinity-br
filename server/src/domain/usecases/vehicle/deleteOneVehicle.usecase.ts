import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_REPOSITORY,
  VehicleRepository,
} from '../../repositories/vehicle.repository';

export const DELETE_ONE_VEHICLE_USECASE = 'DELETE_ONE_VEHICLE_USECASE';

@Injectable()
export class DeleteOneVehicleUsecase {
  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async handle(id: string) {
    try {
      const vehicle = await this.vehicleRepository.findOneById(id);
      if (!vehicle) throw new Error('vehicle not found');

      return await this.vehicleRepository.deleteOneById(id);
    } catch (error) {
      console.error(error);
    }
  }
}
