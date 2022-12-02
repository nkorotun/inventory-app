import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { config } from './constants/env';
import { DatabaseConfig } from './shared/database.config';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { CompanyRolesModule } from './modules/company-roles/company-roles.module';
import { EquipmentTypeModule } from './modules/equipment-type/equipment-type.module';
import { TicketModule } from './modules/ticket/ticket.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    UserModule,
    CompanyRolesModule,
    EquipmentModule,
    EquipmentTypeModule,
    TicketModule,
  ],
})
export class AppModule {}
