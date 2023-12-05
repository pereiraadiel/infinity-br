import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';
import { CreateOneVehicleTypeDTO } from '../../dtos/vehicleType/createOneVehicleType.dto';

@Injectable()
export class CreateOneVehicleTypeUsecase {
  constructor(
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: CreateOneVehicleTypeDTO) {
    try {
      const vehicleType = await this.vehicleTypeRepository.findOneByName(
        dto.name,
      );
      if (vehicleType) throw new Error('vehicleType already exists');

      return await this.vehicleTypeRepository.createOne(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
