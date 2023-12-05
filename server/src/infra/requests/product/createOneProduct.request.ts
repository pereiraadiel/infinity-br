import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateOneProductRequest {
  @IsString()
  @MinLength(3)
  @ApiProperty({
    description: 'Nome do produto',
    minLength: 3,
    required: true,
    example: 'TV 50"',
  })
  name: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @ApiProperty({
    description: 'Peso do produto para cálculo do frete',
    minimum: 1,
    required: false,
    default: 1,
    example: 1,
  })
  weight?: number;
}
