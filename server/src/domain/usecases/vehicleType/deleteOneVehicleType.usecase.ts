import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const DELETE_ONE_VEHICLE_TYPE_USECASE =
  'DELETE_ONE_VEHICLE_TYPE_USECASE';

@Injectable()
export class DeleteOneVehicleTypeUsecase {
  private SERVICE_NAME = 'Delete One VehicleType Usecase';

  constructor(
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(id: string) {
    try {
      const vehicleType = await this.vehicleTypeRepository.findOneById(id);
      if (!vehicleType) throw new NotFoundException([], this.SERVICE_NAME);

      return await this.vehicleTypeRepository.deleteOneById(id);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
