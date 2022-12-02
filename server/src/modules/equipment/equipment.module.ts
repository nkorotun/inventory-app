import { forwardRef, Module } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';
import { EquipmentEntity } from './entities/equipment.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/modules/user/user.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([EquipmentEntity]),
  ],
  controllers: [EquipmentController],
  providers: [EquipmentService],
})
export class EquipmentModule {}
