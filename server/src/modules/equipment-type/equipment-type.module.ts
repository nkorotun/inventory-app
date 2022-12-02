import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentModule } from '../equipment/equipment.module';
import { UserModule } from '../user/user.module';
import { EquipmentTypeEntity } from './entity/equipment-type.entity';
import { EquipmentTypeController } from './equipment-type.controller';
import { EquipmentTypeService } from './equipment-type.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => EquipmentModule),
    TypeOrmModule.forFeature([EquipmentTypeEntity]),
  ],
  controllers: [EquipmentTypeController],
  providers: [EquipmentTypeService],
})
export class EquipmentTypeModule {}
