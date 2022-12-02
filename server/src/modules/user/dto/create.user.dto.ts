import { CompanyRolesEntity } from 'src/modules/company-roles/entity/company-roles.entity';
import { ERole, EStatus } from '../user.constant';

export class CreateUserDto {
  email: string;
  password: string;
  name: string;
  status: EStatus;
  role: ERole;
  created: Date;
  equipmentIds: string[];
  company_role: CompanyRolesEntity;
}
