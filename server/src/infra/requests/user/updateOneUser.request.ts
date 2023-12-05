import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { RoleEnum } from '../../../domain/enums/role.enum';
import { ApiProperty } from '@nestjs/swagger';
import { randomUUID } from 'crypto';

export class UpdateOneUserParamsRequest {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário (UUID)',
    required: true,
    example: randomUUID(),
  })
  id: string;
}

export class UpdateOneUserBodyRequest {
  @IsOptional()
  @IsString()
  @MinLength(5)
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Fulano de Tal',
    required: false,
    minLength: 5,
  })
  name?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    description: 'Email do usuário',
    required: false,
    example: 'fulano@tal.com',
  })
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @ApiProperty({
    description: 'Senha do usuário',
    required: false,
    minLength: 8,
    example: '12345678',
  })
  password?: string;

  @IsOptional()
  @IsEnum(RoleEnum)
  @ApiProperty({
    description: 'Cargo do usuário',
    required: false,
    example: RoleEnum.Shopman,
    enum: RoleEnum,
    enumName: 'Role',
  })
  role?: RoleEnum;
}
