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
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { CatchExceptions } from '../catchExceptions';

export const CREATE_ONE_VEHICLE_USECASE = 'CREATE_ONE_VEHICLE_USECASE';

@Injectable()
export class CreateOneVehicleUsecase {
  private SERVICE_NAME = 'Create One Vehicle Usecase';

  constructor(
    @Inject(VEHICLE_REPOSITORY)
    private readonly vehicleRepository: VehicleRepository,
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: CreateOneVehicleDTO) {
    try {
      const vehicle = await this.vehicleRepository.findOneByPlate(dto.plate);
      if (vehicle) throw new AlreadyExistsException([], this.SERVICE_NAME);

      const vehicleType = await this.vehicleTypeRepository.findOneById(
        dto.vehicleTypeId,
      );
      if (!vehicleType)
        throw new NotFoundException(
          [{ message: 'tipo de veiculo nao encontrado' }],
          this.SERVICE_NAME,
        );

      return await this.vehicleRepository.createOne(dto);
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
