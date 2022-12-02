import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERRORS } from 'src/constants/errors';
import { DeleteResult, Repository } from 'typeorm';
import { CreateEquipmentTypeDto } from './dto/create.equipment-type.dto';
import { UpdateEquipmentTypeDto } from './dto/update.equipment-type.dto';
import { EquipmentTypeEntity } from './entity/equipment-type.entity';

@Injectable()
export class EquipmentTypeService {
  constructor(
    @InjectRepository(EquipmentTypeEntity)
    private equipmentTypeRepository: Repository<EquipmentTypeEntity>,
  ) {}

  async createType(
    companyRoleData: CreateEquipmentTypeDto,
  ): Promise<EquipmentTypeEntity> {
    const type = await this.equipmentTypeRepository.findOne({
      where: { name: companyRoleData.name },
      relations: ['equipment'],
    });
    if (type) {
      throw new HttpException(ERRORS.equipmentTypeExist, HttpStatus.NOT_FOUND);
    }
    return await this.equipmentTypeRepository.save(companyRoleData);
  }

  async getAllTypes(): Promise<EquipmentTypeEntity[]> {
    return await this.equipmentTypeRepository.find({
      relations: ['equipment'],
    });
  }

  async getType(id: string): Promise<EquipmentTypeEntity> {
    try {
      return await this.equipmentTypeRepository.findOneOrFail({
        where: { id: id },
        relations: ['equipment'],
      });
    } catch (e) {
      throw new HttpException(
        ERRORS.equipmentTypeNotFound,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async updateType(
    id: string,
    roleData: UpdateEquipmentTypeDto,
  ): Promise<EquipmentTypeEntity> {
    const role = await this.equipmentTypeRepository.findOne({
      where: { id: id },
      relations: ['equipment'],
    });
    if (!role) {
      throw new HttpException(
        ERRORS.equipmentTypeNotFound,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.equipmentTypeRepository.save({
      ...role,
      ...roleData,
    });
  }

  async removeType(id: string): Promise<DeleteResult> {
    const role = await this.equipmentTypeRepository.findOne({
      where: { id: id },
    });
    if (!role) {
      throw new HttpException(
        ERRORS.equipmentTypeNotFound,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.equipmentTypeRepository.delete(id);
  }
}
