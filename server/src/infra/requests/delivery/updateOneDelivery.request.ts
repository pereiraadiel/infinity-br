import { IsEnum, IsOptional, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';
import { DeliveryStatusEnum } from '../../../domain/enums/deliveryStatus.enum';

export class UpdateOneDeliveryParamsRequest {
  @IsUUID()
  @ApiProperty({
    description: 'Id do frete/entrega (UUID)',
    required: true,
    example: randomUUID(),
  })
  id: string;
}

export class UpdateOneDeliveryBodyRequest {
  @IsOptional()
  @IsEnum(DeliveryStatusEnum)
  @ApiProperty({
    description: 'status da entrega/frete',
    required: false,
    example: DeliveryStatusEnum.oncourse,
    enum: DeliveryStatusEnum,
    enumName: 'DeliveryStatus',
  })
  status?: DeliveryStatusEnum;
}
