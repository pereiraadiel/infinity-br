import { RoleEnum } from '../../enums/role.enum';

export class UpdateOneUserDTO {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  role?: RoleEnum;
}
