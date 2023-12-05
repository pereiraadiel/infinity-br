import { CreateOneVehicleTypeDTO } from '../dtos/vehicleType/createOneVehicleType.dto';
import { FindManyVehicleTypesDTO } from '../dtos/vehicleType/findManyVehicleTypes.dto';
import { UpdateOneVehicleTypeDTO } from '../dtos/vehicleType/updateOneVehicleType.dto';
import { VehicleTypeEntity } from '../entities/vehicleType.entity';

export interface VehicleTypeRepository {
  createOne(dto: CreateOneVehicleTypeDTO): Promise<VehicleTypeEntity>;
  findMany(dto: FindManyVehicleTypesDTO): Promise<VehicleTypeEntity[]>;
  findOneById(id: string): Promise<VehicleTypeEntity | null>;
  updateOne(dto: UpdateOneVehicleTypeDTO): Promise<VehicleTypeEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
