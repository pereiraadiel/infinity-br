import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { DeliveryStatusEnum } from './../../../domain/enums/deliveryStatus.enum';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

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

  @IsOptional()
  @IsUUID()
  @ApiProperty({
    description: 'id do entregador',
    required: false,
    example: randomUUID(),
  })
  deliverymanId?: string;
}
