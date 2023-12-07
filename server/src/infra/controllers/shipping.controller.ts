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

@ApiTags('shippings')
@Controller('shippings')
export class ShippingController {
  constructor(
    @Inject(SHIPPING_SERVICE)
    private readonly shippingService: ShippingService,
  ) {}

  @Post()
  async createOne(@Body() request: CreateOneShippingRequest) {
    return await this.shippingService.createOne(request);
  }

  @Get()
  async getMany() {
    return await this.shippingService.findMany({});
  }

  @Patch(':id')
  async UpdateOne(
    @Body() request: UpdateOneShippingBodyRequest,
    @Param() { id }: UpdateOneShippingParamsRequest,
  ) {
    return await this.shippingService.updateOne({ id, ...request });
  }

  @Delete(':id')
  async deleteOne(@Param() { id }: { id: string }) {
    return await this.shippingService.deleteOne(id);
  }
}
