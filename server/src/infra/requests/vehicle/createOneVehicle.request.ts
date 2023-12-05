import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, MinLength } from 'class-validator';
import { randomUUID } from 'crypto';

export class CreateOneVehicleRequest {
  @IsString()
  @MinLength(5)
  @ApiProperty({
    description: 'Nome do veiculo',
    example: 'Chevrolet Onix',
    required: true,
    minLength: 5,
  })
  name: string;

  @IsString()
  @MinLength(5)
  @ApiProperty({
    description: 'Placa do veiculo',
    example: 'ABC1D23',
    required: true,
    minLength: 5,
  })
  plate: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id do tipo de veiculo (UUID)',
    required: true,
    example: randomUUID(),
  })
  vehicleTypeId: string;
}
