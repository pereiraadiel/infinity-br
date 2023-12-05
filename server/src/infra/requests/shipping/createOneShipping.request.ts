import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsUUID, Min } from 'class-validator';
import { randomUUID } from 'crypto';

export class CreateOneShippingRequest {
  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Distancia de deslocamento em metros',
    example: 1234,
    required: true,
    minimum: 1,
  })
  distanceInMeters: number;

  @IsUUID()
  @ApiProperty({
    description: 'Id do veiculo',
    example: randomUUID(),
    required: true,
  })
  vehicleTypeId: string;

  @ApiProperty({
    description: 'Id do produto',
    example: randomUUID(),
    required: true,
  })
  productId: string;
}
