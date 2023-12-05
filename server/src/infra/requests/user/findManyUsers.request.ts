import { IsEnum, IsOptional } from 'class-validator';
import { RoleEnum } from '../../../domain/enums/role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class FindManyUsersRequest {
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
