import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';
import { randomUUID } from 'crypto';

export class UpdateOneVehicleTypeParamsRequest {
  @IsUUID()
  @ApiProperty({
    description: 'Id do tipo de veiculo (UUID)',
    required: true,
    example: randomUUID(),
  })
  id: string;
}

export class UpdateOneVehicleTypeBodyRequest {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    description: 'Nome do tipo de veiculo',
    example: 'camionete',
    required: false,
    minLength: 3,
  })
  name?: string;

  @IsOptional()
  @IsOptional()
  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Peso do tipo de veiculo para cálculo do frete',
    minimum: 1,
    required: false,
    default: 1,
    example: 1,
  })
  weight?: number;
}
