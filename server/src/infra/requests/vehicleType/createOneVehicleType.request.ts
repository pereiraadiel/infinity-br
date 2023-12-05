import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  IsOptional,
  IsNumber,
  Min,
} from 'class-validator';

export class CreateOneVehicleTypeRequest {
  @IsString()
  @MinLength(3)
  @ApiProperty({
    description: 'Nome do tipo de veiculo',
    example: 'camionete',
    required: true,
    minLength: 3,
  })
  name: string;

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
