import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';
import { UpdateOneVehicleTypeDTO } from '../../dtos/vehicleType/updateOneVehicleType.dto';

@Injectable()
export class UpdateOneVehicleTypeUsecase {
  constructor(
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: UpdateOneVehicleTypeDTO) {
    try {
      const vehicleType = await this.vehicleTypeRepository.findOneById(dto.id);
      if (!vehicleType) throw new Error('vehicleType not found');

      if (dto.name !== undefined) {
        const vehicleTypeNameExists =
          await this.vehicleTypeRepository.findOneByName(dto.name);
        if (vehicleTypeNameExists)
          throw new Error('vehicleType with given name already exist');
        return await this.vehicleTypeRepository.updateOne(dto);
      } else {
        return await this.vehicleTypeRepository.updateOne(dto);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
