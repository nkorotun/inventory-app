import { PartialType } from '@nestjs/swagger';
import { CreateCompanyRoleDto } from './create.company-roles.dto';

export class UpdateCompanyRoleDto extends PartialType(CreateCompanyRoleDto) {}
