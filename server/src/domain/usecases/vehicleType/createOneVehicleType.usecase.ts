import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';
import { CreateOneVehicleTypeDTO } from '../../dtos/vehicleType/createOneVehicleType.dto';
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { CatchExceptions } from '../catchExceptions';

export const CREATE_ONE_VEHICLE_TYPE_USECASE =
  'CREATE_ONE_VEHICLE_TYPE_USECASE';

@Injectable()
export class CreateOneVehicleTypeUsecase {
  private SERVICE_NAME = 'Create One Vehicle Type Usecase';

  constructor(
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: CreateOneVehicleTypeDTO) {
    try {
      const vehicleType = await this.vehicleTypeRepository.findOneByName(
        dto.name,
      );
      if (vehicleType) throw new AlreadyExistsException([], this.SERVICE_NAME);

      return await this.vehicleTypeRepository.createOne({
        ...dto,
        weight: dto.weight || 1,
      });
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
