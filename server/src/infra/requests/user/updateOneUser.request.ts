import {
  IsEmail,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';
import { RoleEnum } from '../../../domain/enums/role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOneUserRequest {
  @IsUUID()
  id: string;

  @IsOptional()
  @IsString()
  @MinLength(5)
  @ApiProperty({
    description: 'Nome do usuário',
    example: 'Fulano de Tal',
    required: true,
    minLength: 5,
  })
  name?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty({
    description: 'Email do usuário',
    required: true,
    example: 'fulano@tal.com',
  })
  email?: string;

  @IsOptional()
  @IsString()
  @MinLength(8)
  @ApiProperty({
    description: 'Senha do usuário',
    required: true,
    minLength: 8,
    example: '12345678',
  })
  password?: string;

  @IsOptional()
  role?: RoleEnum;
}
