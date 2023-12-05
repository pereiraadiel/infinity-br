import { CreateOneVehicleDTO } from '../dtos/vehicle/createOneVehicle.dto';
import { FindManyVehiclesDTO } from '../dtos/vehicle/findManyVehicles.dto';
import { UpdateOneVehicleDTO } from '../dtos/vehicle/updateOneVehicle.dto';
import { VehicleEntity } from '../entities/vehicle.entity';

export interface VehicleRepository {
  createOne(dto: CreateOneVehicleDTO): Promise<VehicleEntity>;
  findMany(dto: FindManyVehiclesDTO): Promise<VehicleEntity[]>;
  findOneById(id: string): Promise<VehicleEntity | null>;
  updateOne(dto: UpdateOneVehicleDTO): Promise<VehicleEntity | null>;
  deleteOneById(id: string): Promise<void>;
}
