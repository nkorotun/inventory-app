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
import { CreateEquipmentDto } from './dto/create.equipment.dto';
import { UpdateEquipmentDto } from './dto/update.equiment.dto';
import { EQUIPMENT_ROUTES } from './equipment.constant';
import { EquipmentService } from './equipment.service';

@Controller(EQUIPMENT_ROUTES.main)
export class EquipmentController {
  constructor(private equipmentService: EquipmentService) {}

  @Roles(ERole.admin, ERole.manager)
  @Post(EQUIPMENT_ROUTES.create)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createEquip(@Body() equipData: CreateEquipmentDto) {
    return this.equipmentService.createEquip(equipData);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(EQUIPMENT_ROUTES.getAll)
  getAllEquips() {
    return this.equipmentService.getAllEquips();
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(EQUIPMENT_ROUTES.getById)
  getEquip(@Param('id') id) {
    return this.equipmentService.getEquip(id);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(EQUIPMENT_ROUTES.getById)
  updateEquip(@Param('id') id, @Body() UpdateEquipmentDto: UpdateEquipmentDto) {
    return this.equipmentService.updateEquip(id, UpdateEquipmentDto);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(EQUIPMENT_ROUTES.getById)
  removeEquip(@Param('id') id) {
    return this.equipmentService.removeEquip(id);
  }
}
