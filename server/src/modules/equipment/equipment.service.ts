import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERRORS } from 'src/constants/errors';
import { DeleteResult, Repository } from 'typeorm';
import { CreateEquipmentDto } from './dto/create.equipment.dto';
import { UpdateEquipmentDto } from './dto/update.equiment.dto';
import { EquipmentEntity } from './entities/equipment.entity';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(EquipmentEntity)
    private equipmentRepository: Repository<EquipmentEntity>,
  ) {}

  async createEquip(equipData: CreateEquipmentDto): Promise<EquipmentEntity> {
    return await this.equipmentRepository.save(equipData);
  }

  async getAllEquips(): Promise<EquipmentEntity[]> {
    return await this.equipmentRepository.find({
      relations: ['type', 'user', 'ticket'],
    });
  }

  async getEquip(id: string): Promise<EquipmentEntity> {
    try {
      return await this.equipmentRepository.findOneOrFail({
        where: { id: id },
        relations: ['type', 'user', 'ticket'],
      });
    } catch (e) {
      throw new HttpException(ERRORS.equipmentNotFound, HttpStatus.NOT_FOUND);
    }
  }

  async updateEquip(
    id: string,
    equipData: UpdateEquipmentDto,
  ): Promise<EquipmentEntity> {
    const equip = await this.equipmentRepository.findOne({
      where: { id: id },
      relations: ['type', 'user', 'ticket'],
    });
    if (!equip) {
      throw new HttpException(ERRORS.equipmentNotFound, HttpStatus.NOT_FOUND);
    }
    return await this.equipmentRepository.save({ ...equip, ...equipData });
  }

  async removeEquip(id: string): Promise<DeleteResult> {
    const user = await this.equipmentRepository.findOne({
      where: { id: id },
      relations: ['type', 'user', 'ticket'],
    });
    if (!user) {
      throw new HttpException(ERRORS.equipmentNotFound, HttpStatus.NOT_FOUND);
    }
    return await this.equipmentRepository.delete(id);
  }
}
