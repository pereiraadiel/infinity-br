import { IsEnum, IsOptional } from 'class-validator';
import { DeliveryStatusEnum } from './../../../domain/enums/deliveryStatus.enum';
import { ApiProperty } from '@nestjs/swagger';

export class FindManyDeliveriesRequest {
  @IsOptional()
  @IsEnum(DeliveryStatusEnum)
  @ApiProperty({
    description: 'status da entrega',
    required: false,
    example: DeliveryStatusEnum.oncourse,
    enum: DeliveryStatusEnum,
    enumName: 'DeliveryStatus',
  })
  status?: DeliveryStatusEnum;
}
