import { UserController } from './user.controller';
import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'src/constants/env';
import { UserEntity } from './entities/user.entity';
import { RolesGuard } from '../../guards/roles.guard';
import { CompanyRolesEntity } from '../company-roles/entity/company-roles.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, CompanyRolesEntity]),
    JwtModule.register({
      secret: config().jwtSecret,
      signOptions: {
        expiresIn: '24h',
      },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, RolesGuard],
  exports: [JwtModule, UserService],
})
export class UserModule {}
