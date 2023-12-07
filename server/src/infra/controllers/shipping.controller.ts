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
  SHIPPING_SERVICE,
  ShippingService,
} from '../../domain/services/shipping.service';
import { CreateOneShippingRequest } from '../requests/shipping/createOneShipping.request';
import {
  UpdateOneShippingBodyRequest,
  UpdateOneShippingParamsRequest,
} from '../requests/shipping/updateOneShipping.request';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '../decorators/role.decorator';
import { RoleEnum } from '../../domain/enums/role.enum';

@ApiTags('shippings')
@Controller('shippings')
export class ShippingController {
  constructor(
    @Inject(SHIPPING_SERVICE)
    private readonly shippingService: ShippingService,
  ) {}

  @Post()
  @Role(RoleEnum.Shopman)
  async createOne(@Body() request: CreateOneShippingRequest) {
    return await this.shippingService.createOne(request);
  }

  @Get()
  async getMany() {
    return await this.shippingService.findMany({});
  }

  @Patch(':id')
  @Role(RoleEnum.Shopman)
  async UpdateOne(
    @Body() request: UpdateOneShippingBodyRequest,
    @Param() { id }: UpdateOneShippingParamsRequest,
  ) {
    return await this.shippingService.updateOne({ id, ...request });
  }

  @Delete(':id')
  @Role(RoleEnum.Shopman)
  async deleteOne(@Param() { id }: { id: string }) {
    return await this.shippingService.deleteOne(id);
  }
}
