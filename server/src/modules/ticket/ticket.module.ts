import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentModule } from '../equipment/equipment.module';
import { UserModule } from '../user/user.module';
import { TicketEntity } from './entity/ticket.entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => EquipmentModule),
    TypeOrmModule.forFeature([TicketEntity]),
  ],
  controllers: [TicketController],
  providers: [TicketService],
})
export class TicketModule {}
