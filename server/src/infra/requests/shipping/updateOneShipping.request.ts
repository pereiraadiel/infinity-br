import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum, IsUUID, IsNumber, Min } from 'class-validator';
import { ShippingStatusEnum } from '../../../domain/enums/shippingStatus.enum';
import { randomUUID } from 'crypto';

export class UpdateOneShippingRequest {
  @IsUUID()
  @ApiProperty({
    description: 'Id do envio (UUID)',
    required: true,
    example: randomUUID(),
  })
  id: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Distancia de deslocamento em metros',
    example: 1234,
    required: true,
    minimum: 1,
  })
  distanceInMeters?: number;

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
