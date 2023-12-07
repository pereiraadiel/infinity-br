import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_REPOSITORY,
  VehicleRepository,
} from '../../repositories/vehicle.repository';
import { UpdateOneVehicleDTO } from '../../dtos/vehicle/updateOneVehicle.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const UPDATE_ONE_VEHICLE_USECASE = 'UPDATE_ONE_VEHICLE_USECASE';

@Injectable()
export class UpdateOneVehicleUsecase {
  private SERVICE_NAME = 'Update One Vehicle Usecase';

  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async handle(dto: UpdateOneVehicleDTO) {
    try {
      const vehicle = await this.vehicleRepository.findOneById(dto.id);
      if (!vehicle) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.vehicleRepository.updateOne(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
