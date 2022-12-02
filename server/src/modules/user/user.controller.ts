import { UpdateUserDto } from './dto/update-user.dto';
import { ERole, USER_ROUTES } from './user.constant';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { RolesGuard } from '../../guards/roles.guard';
import { Roles } from 'src/decorators/roles.decorator';
import { JwtAuthGuard } from '../../guards/jwt.guard';

@Controller(USER_ROUTES.main)
export class UserController {
  constructor(private userService: UserService) {}

  @Post(USER_ROUTES.login)
  login(@Body() userInfo: CreateUserDto) {
    return this.userService.login(userInfo);
  }

  //@Roles(ERole.admin)
  @Post(USER_ROUTES.create)
  //@UseGuards(JwtAuthGuard, RolesGuard)
  createUser(@Body() userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(USER_ROUTES.getAll)
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(USER_ROUTES.getById)
  getUser(@Param('id') id) {
    return this.userService.getUser(id);
  }

  @Roles(ERole.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(USER_ROUTES.getById)
  updateUser(@Param('id') id, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Roles(ERole.admin)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(USER_ROUTES.getById)
  removeUser(@Param('id') id) {
    return this.userService.removeUser(id);
  }
}
