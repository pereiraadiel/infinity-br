import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';
import { FindManyVehicleTypesDTO } from '../../dtos/vehicleType/findManyVehicleTypes.dto';

@Injectable()
export class FindManyVehicleTypesUsecase {
  constructor(
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: FindManyVehicleTypesDTO) {
    try {
      return await this.vehicleTypeRepository.findMany(dto);
    } catch (error) {
      console.error(error);
    }
  }
}
