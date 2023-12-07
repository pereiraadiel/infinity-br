import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  VEHICLE_SERVICE,
  VehicleService,
} from '../../domain/services/vehicle.service';
import { CreateOneVehicleRequest } from '../requests/vehicle/createOneVehicle.request';
import {
  UpdateOneVehicleBodyRequest,
  UpdateOneVehicleParamsRequest,
} from '../requests/vehicle/updateOneVehicle.request';
import { ApiTags } from '@nestjs/swagger';
import { RoleEnum } from '../../domain/enums/role.enum';
import { Role } from '../decorators/role.decorator';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehicleController {
  constructor(
    @Inject(VEHICLE_SERVICE)
    private readonly vehicleService: VehicleService,
  ) {}

  @Post()
  @Role(RoleEnum.Shopman)
  async createOne(@Body() request: CreateOneVehicleRequest) {
    return await this.vehicleService.createOne(request);
  }

  @Get()
  async getMany() {
    return await this.vehicleService.findMany({});
  }

  @Patch(':id')
  @Role(RoleEnum.Shopman)
  async UpdateOne(
    @Body() request: UpdateOneVehicleBodyRequest,
    @Param() { id }: UpdateOneVehicleParamsRequest,
  ) {
    return await this.vehicleService.updateOne({ id, ...request });
  }

  @Delete(':id')
  @Role(RoleEnum.Shopman)
  async deleteOne(@Param() { id }: { id: string }) {
    return await this.vehicleService.deleteOne(id);
  }
}
