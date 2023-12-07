import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';
import { randomUUID } from 'crypto';

export class CreateOneDeliveryRequest {
  @IsUUID()
  @ApiProperty({
    description: 'id do entregador',
    required: true,
    example: randomUUID(),
  })
  deliverymanId: string;

  @IsUUID()
  @ApiProperty({
    description: 'id da demanda de frete (shipping)',
    required: true,
    example: randomUUID(),
  })
  shippingId: string;
}
