import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';
import { randomUUID } from 'crypto';

export class UpdateOneVehicleParamsRequest {
  @IsUUID()
  @ApiProperty({
    description: 'Id do veiculo (UUID)',
    required: true,
    example: randomUUID(),
  })
  id: string;
}

export class UpdateOneVehicleBodyRequest {
  @IsOptional()
  @IsString()
  @MinLength(5)
  @ApiProperty({
    description: 'Nome do veiculo',
    example: 'Chevrolet Onix',
    required: false,
    minLength: 5,
  })
  name?: string;
}
