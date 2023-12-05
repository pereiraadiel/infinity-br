import { IsEnum, IsOptional } from 'class-validator';
import { ShippingStatusEnum } from '../../../domain/enums/shippingStatus.enum';
import { ApiProperty } from '@nestjs/swagger';

export class FindManyShippingsRequest {
  @IsOptional()
  @IsEnum(ShippingStatusEnum)
  @ApiProperty({
    description: 'status do envio',
    required: false,
    example: ShippingStatusEnum.created,
    enum: ShippingStatusEnum,
    enumName: 'ShipppingStatus',
  })
  status?: ShippingStatusEnum;
}
