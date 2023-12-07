import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignUserInRequest {
  @IsEmail()
  @ApiProperty({
    description: 'email do usuário',
    required: true,
    example: 'fulano@tal.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @ApiProperty({
    description: 'senha do usuário',
    required: true,
    example: '12345678',
    minLength: 8,
  })
  password: string;
}
