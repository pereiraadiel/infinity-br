import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';

@Injectable()
export class DeleteOneVehicleTypeUsecase {
  constructor(
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(id: string) {
    try {
      const vehicleType = await this.vehicleTypeRepository.findOneById(id);
      if (!vehicleType) throw new Error('vehicleType not found');

      return await this.vehicleTypeRepository.deleteOneById(id);
    } catch (error) {
      console.error(error);
    }
  }
}
