import { RoleEnum } from '../../enums/role.enum';

export class CreateOneUserDTO {
  name: string;
  email: string;
  password: string;
  role: RoleEnum;
}
