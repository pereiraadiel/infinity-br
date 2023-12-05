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

export class UpdateOneProductParamsRequest {
  @IsUUID()
  @ApiProperty({
    description: 'Id do produto (UUID)',
    required: true,
    example: randomUUID(),
  })
  id: string;
}

export class UpdateOneProductBodyRequest {
  @IsOptional()
  @IsString()
  @MinLength(3)
  @ApiProperty({
    description: 'Nome do produto',
    example: 'TV 50"',
    required: false,
    minLength: 3,
  })
  name?: string;

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
