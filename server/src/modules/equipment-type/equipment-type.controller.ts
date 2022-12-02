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
import { CreateEquipmentTypeDto } from './dto/create.equipment-type.dto';
import { UpdateEquipmentTypeDto } from './dto/update.equipment-type.dto';
import { EQUIPMENT_TYPE_ROUTES } from './equipment-type.constant';
import { EquipmentTypeService } from './equipment-type.service';

@Controller(EQUIPMENT_TYPE_ROUTES.main)
export class EquipmentTypeController {
  constructor(private equipmentTypeService: EquipmentTypeService) {}

  @Roles(ERole.admin, ERole.manager)
  @Post(EQUIPMENT_TYPE_ROUTES.create)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createType(@Body() typeData: CreateEquipmentTypeDto) {
    return this.equipmentTypeService.createType(typeData);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(EQUIPMENT_TYPE_ROUTES.getAll)
  getAllTypes() {
    return this.equipmentTypeService.getAllTypes();
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(EQUIPMENT_TYPE_ROUTES.getById)
  getType(@Param('id') id) {
    return this.equipmentTypeService.getType(id);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(EQUIPMENT_TYPE_ROUTES.getById)
  updateType(
    @Param('id') id,
    @Body() UpdateEquipmentTypeDto: UpdateEquipmentTypeDto,
  ) {
    return this.equipmentTypeService.updateType(id, UpdateEquipmentTypeDto);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(EQUIPMENT_TYPE_ROUTES.getById)
  removeType(@Param('id') id) {
    return this.equipmentTypeService.removeType(id);
  }
}
