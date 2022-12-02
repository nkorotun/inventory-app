import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERRORS } from 'src/constants/errors';
import { DeleteResult, Repository } from 'typeorm';
import { CreateCompanyRoleDto } from './dto/create.company-roles.dto';
import { UpdateCompanyRoleDto } from './dto/update.company-roles.dto';
import { CompanyRolesEntity } from './entity/company-roles.entity';

@Injectable()
export class CompanyRolesService {
  constructor(
    @InjectRepository(CompanyRolesEntity)
    private companyRolesRepository: Repository<CompanyRolesEntity>,
  ) {}

  async createCompanyRole(
    companyRoleData: CreateCompanyRoleDto,
  ): Promise<CompanyRolesEntity> {
    const role = await this.companyRolesRepository.findOne({
      where: { name: companyRoleData.name },
    });
    if (role) {
      throw new HttpException(ERRORS.companyRoleExist, HttpStatus.NOT_FOUND);
    }
    return await this.companyRolesRepository.save(companyRoleData);
  }

  async getAllRoles(): Promise<CompanyRolesEntity[]> {
    return await this.companyRolesRepository.find({
      relations: ['users'],
    });
  }

  async getRole(id: string): Promise<CompanyRolesEntity> {
    try {
      return await this.companyRolesRepository.findOneOrFail(id);
    } catch (e) {
      throw new HttpException(ERRORS.companyRoleNotFound, HttpStatus.NOT_FOUND);
    }
  }

  async updateRole(
    id: string,
    roleData: UpdateCompanyRoleDto,
  ): Promise<CompanyRolesEntity> {
    const role = await this.companyRolesRepository.findOne({
      where: { id: id },
    });
    if (!role) {
      throw new HttpException(ERRORS.companyRoleNotFound, HttpStatus.NOT_FOUND);
    }
    return await this.companyRolesRepository.save({
      ...role,
      ...roleData,
    });
  }

  async removeRole(id: string): Promise<DeleteResult> {
    const role = await this.companyRolesRepository.findOne({
      where: { id: id },
    });
    if (!role) {
      throw new HttpException(ERRORS.companyRoleNotFound, HttpStatus.NOT_FOUND);
    }
    return await this.companyRolesRepository.delete(id);
  }
}
