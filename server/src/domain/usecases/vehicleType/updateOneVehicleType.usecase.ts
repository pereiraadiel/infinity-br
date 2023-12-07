import { Inject, Injectable } from '@nestjs/common';
import {
  VEHICLE_TYPE_REPOSITORY,
  VehicleTypeRepository,
} from '../../repositories/vehicleType.repository';
import { UpdateOneVehicleTypeDTO } from '../../dtos/vehicleType/updateOneVehicleType.dto';
import { NotFoundException } from '../../exceptions/notFound.exception';
import { AlreadyExistsException } from '../../exceptions/alreadyExists.exception';
import { CatchExceptions } from '../catchExceptions';

export const UPDATE_ONE_VEHICLE_TYPE_USECASE =
  'UPDATE_ONE_VEHICLE_TYPE_USECASE';

@Injectable()
export class UpdateOneVehicleTypeUsecase {
  private SERVICE_NAME = 'Update One VehicleType Usecase';

  constructor(
    @Inject(VEHICLE_TYPE_REPOSITORY)
    private readonly vehicleTypeRepository: VehicleTypeRepository,
  ) {}

  async handle(dto: UpdateOneVehicleTypeDTO) {
    try {
      const vehicleType = await this.vehicleTypeRepository.findOneById(dto.id);
      if (!vehicleType) throw new NotFoundException([], this.SERVICE_NAME);

      if (dto.name !== undefined) {
        const vehicleTypeNameExists =
          await this.vehicleTypeRepository.findOneByName(dto.name);
        if (vehicleTypeNameExists)
          throw new AlreadyExistsException(
            [
              {
                message: 'tipo de veiculo já existe',
              },
            ],
            this.SERVICE_NAME,
          );
        return await this.vehicleTypeRepository.updateOne(dto);
      } else {
        return await this.vehicleTypeRepository.updateOne(dto);
      }
    } catch (error) {
      CatchExceptions(error, [], this.SERVICE_NAME);
    }
  }
}
