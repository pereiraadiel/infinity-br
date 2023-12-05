import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_REPOSITORY,
  VehicleRepository,
} from '../../repositories/vehicle.repository';
import { CreateOneVehicleDTO } from '../../dtos/vehicle/createOneVehicle.dto';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';

export const CREATE_ONE_VEHICLE_USECASE = 'CREATE_ONE_VEHICLE_USECASE';

@Injectable()
export class CreateOneVehicleUsecase {
  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepository,
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: CreateOneVehicleDTO) {
    try {
      const vehicle = await this.vehicleRepository.findOneByPlate(dto.plate);
      if (vehicle) throw new Error('vehicle already exists');

      const vehicleType = await this.vehicleTypeRepository.findOneById(
        dto.vehicleTypeId,
      );
      if (!vehicleType) throw new Error('vehicleType not found');

      return await this.vehicleRepository.createOne(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
