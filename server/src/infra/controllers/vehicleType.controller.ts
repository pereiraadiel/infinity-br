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
  VEHICLE_TYPE_SERVICE,
  VehicleTypeService,
} from '../../domain/services/vehicleType.service';
import { CreateOneVehicleTypeRequest } from '../requests/vehicleType/createOneVehicleType.request';
import {
  UpdateOneVehicleTypeBodyRequest,
  UpdateOneVehicleTypeParamsRequest,
} from '../requests/vehicleType/updateOneVehicleType.request';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '../decorators/role.decorator';
import { RoleEnum } from '../../domain/enums/role.enum';

@ApiTags('vehicleTypes')
@Controller('vehicleTypes')
export class VehicleTypeController {
  constructor(
    @Inject(VEHICLE_TYPE_SERVICE)
    private readonly vehicleTypeService: VehicleTypeService,
  ) {}

  @Post()
  @Role(RoleEnum.Shopman)
  async createOne(@Body() request: CreateOneVehicleTypeRequest) {
    return await this.vehicleTypeService.createOne(request);
  }

  @Get()
  async getMany() {
    return await this.vehicleTypeService.findMany({});
  }

  @Patch(':id')
  @Role(RoleEnum.Shopman)
  async UpdateOne(
    @Body() request: UpdateOneVehicleTypeBodyRequest,
    @Param() { id }: UpdateOneVehicleTypeParamsRequest,
  ) {
    return await this.vehicleTypeService.updateOne({ id, ...request });
  }

  @Delete(':id')
  @Role(RoleEnum.Shopman)
  async deleteOne(@Param() { id }: { id: string }) {
    return await this.vehicleTypeService.deleteOne(id);
  }
}
