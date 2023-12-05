import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_REPOSITORY,
  VehicleRepository,
} from '../../repositories/vehicle.repository';
import { UpdateOneVehicleDTO } from '../../dtos/vehicle/updateOneVehicle.dto';

@Injectable()
export class UpdateOneVehicleUsecase {
  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async handle(dto: UpdateOneVehicleDTO) {
    try {
      const vehicle = await this.vehicleRepository.findOneById(dto.id);
      if (!vehicle) throw new Error('vehicle not found');

      return await this.vehicleRepository.updateOne(dto);
    } catch (error) {
      console.error(error);
    }
  }
}