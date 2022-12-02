import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/modules/user/user.module';
import { CompanyRolesController } from './company-roles.controller';
import { CompanyRolesService } from './company-roles.service';
import { CompanyRolesEntity } from './entity/company-roles.entity';

@Module({
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([CompanyRolesEntity]),
  ],
  controllers: [CompanyRolesController],
  providers: [CompanyRolesService],
})
export class CompanyRolesModule {}
