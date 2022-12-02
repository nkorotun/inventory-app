import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { ERole } from 'src/modules/user/user.constant';
import { COMPANY_ROLES_ROUTES } from './company-roles.constant';
import { CompanyRolesService } from './company-roles.service';
import { CreateCompanyRoleDto } from './dto/create.company-roles.dto';

@Controller(COMPANY_ROLES_ROUTES.main)
export class CompanyRolesController {
  constructor(private companyRolesService: CompanyRolesService) {}

  @Roles(ERole.admin, ERole.manager)
  @Post(COMPANY_ROLES_ROUTES.create)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createEquip(@Body() userData: CreateCompanyRoleDto) {
    return this.companyRolesService.createCompanyRole(userData);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(COMPANY_ROLES_ROUTES.getAll)
  getAllRoles() {
    return this.companyRolesService.getAllRoles();
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(COMPANY_ROLES_ROUTES.getById)
  getRole(@Param('id') id) {
    return this.companyRolesService.getRole(id);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(COMPANY_ROLES_ROUTES.getById)
  updateRole(
    @Param('id') id,
    @Body() updateCompanyRoleDto: CreateCompanyRoleDto,
  ) {
    return this.companyRolesService.updateRole(id, updateCompanyRoleDto);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(COMPANY_ROLES_ROUTES.getById)
  removeRole(@Param('id') id) {
    return this.companyRolesService.removeRole(id);
  }
}
