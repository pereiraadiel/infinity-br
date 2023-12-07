import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_REPOSITORY,
  VehicleRepository,
} from '../../repositories/vehicle.repository';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const DELETE_ONE_VEHICLE_USECASE = 'DELETE_ONE_VEHICLE_USECASE';

@Injectable()
export class DeleteOneVehicleUsecase {
  private SERVICE_NAME = 'Delete One Vehicle Usecase';

  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepository,
  ) {}

  async handle(id: string) {
    try {
      const vehicle = await this.vehicleRepository.findOneById(id);
      if (!vehicle) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.vehicleRepository.deleteOneById(id);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
