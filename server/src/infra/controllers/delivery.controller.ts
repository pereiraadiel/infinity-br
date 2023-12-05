// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Inject,
//   Param,
//   Patch,
//   Post,
// } from '@nestjs/common';
// import {
//   DELIVERY_SERVICE,
//   DeliveryService,
// } from '../../domain/services/delivery.service';
// import { CreateOneDeliveryRequest } from '../requests/delivery/createOneDelivery.request';
// import {
//   UpdateOneDeliveryBodyRequest,
//   UpdateOneDeliveryParamsRequest,
// } from '../requests/delivery/updateOneDelivery.request';

// @Controller('deliverys')
// export class DeliveryController {
//   constructor(
//     @Inject(DELIVERY_SERVICE)
//     private readonly deliveryService: DeliveryService,
//   ) {}

//   @Post()
//   async createOne(@Body() request: CreateOneDeliveryRequest) {
//     return await this.deliveryService.createOne(request);
//   }

//   @Get()
//   async getMany() {
//     return await this.deliveryService.findMany({});
//   }

//   @Patch(':id')
//   async UpdateOne(
//     @Body() request: UpdateOneDeliveryBodyRequest,
//     @Param() { id }: UpdateOneDeliveryParamsRequest,
//   ) {
//     return await this.deliveryService.updateOne({ id, ...request });
//   }

//   @Delete(':id')
//   async deleteOne(@Param() { id }: { id: string }) {
//     return await this.deliveryService.deleteOne(id);
//   }
// }
