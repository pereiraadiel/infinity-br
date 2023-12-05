import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { RoleEnum } from '../../../domain/enums/role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class CreateOneUserRequest {
  @IsString()
  @MinLength(5)
  @ApiProperty({
    description: 'Nome do novo usuário',
    example: 'Fulano de Tal',
    required: true,
    minLength: 5,
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'Email do novo usuário',
    required: true,
    example: 'fulano@tal.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({
    description: 'Senha do novo usuário',
    required: true,
    minLength: 8,
    example: '12345678',
  })
  password: string;

  @IsEnum(RoleEnum)
  @ApiProperty({
    description: 'Cargo do novo usuário',
    required: true,
    example: RoleEnum.Shopman,
    enum: RoleEnum,
    enumName: 'Role',
  })
  role: RoleEnum;
}
