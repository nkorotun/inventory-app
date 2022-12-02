import { UpdateUserDto } from './dto/update-user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DeleteResult, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ERRORS } from 'src/constants/errors';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create.user.dto';
import * as bcrypt from 'bcryptjs';
import { ERole } from './user.constant';
import { CompanyRolesEntity } from '../company-roles/entity/company-roles.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(CompanyRolesEntity)
    private companyRolesRepository: Repository<CompanyRolesEntity>,
    private jwtService: JwtService,
  ) {}

  async login(
    userData: CreateUserDto,
  ): Promise<{ token: string; user: UserEntity }> {
    const user = await this.validateUser(userData);
    const token = await this.generateToken(user);
    return token;
  }

  async generateToken(
    user: UserEntity,
  ): Promise<{ token: string; user: UserEntity }> {
    const payload = {
      email: user.email,
      id: user.id,
      name: user.name,
      role: user.role,
    };

    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }

  async validateUser(userData: CreateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { email: userData.email },
    });

    if (!user) {
      throw new HttpException(
        ERRORS.incorrectMailOrPass,
        HttpStatus.BAD_REQUEST,
      );
    }
    const passwordEquals = await bcrypt.compare(
      userData.password,
      user.password,
    );

    if (user && passwordEquals) {
      return user;
    }

    throw new HttpException(ERRORS.incorrectMailOrPass, HttpStatus.BAD_REQUEST);
  }

  async createUser(
    userData: CreateUserDto,
  ): Promise<{ token: string; user: UserEntity }> {
    const { email, company_role } = userData;

    const candidate = await this.userRepository.findOne({
      where: { email: email },
    });
    const userName = userData?.name;

    if (candidate) {
      throw new HttpException(ERRORS.userExist, HttpStatus.BAD_REQUEST);
    }

    if (!userName) {
      throw new HttpException(ERRORS.incorrectFields, HttpStatus.BAD_REQUEST);
    }

    const companyRole = company_role
      ? await this.companyRolesRepository.findOne({
          where: { id: company_role },
        })
      : null;

    const hashPassword = await bcrypt.hash(userData.password, 5);
    const user = await this.userRepository.save({
      email: userData.email,
      name: userData.name,
      password: hashPassword,
      role: userData.role || ERole.user,
      equipmentIds: userData.equipmentIds,
      company_role: companyRole,
    });

    return this.generateToken(user);
  }

  async getUser(id: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['company_role', 'equipment', 'execute_tickets', 'tickets'],
    });
    if (!user) {
      throw new HttpException(ERRORS.userNotFound, HttpStatus.BAD_REQUEST);
    }
    return user;
  }

  async getAllUsers(): Promise<UserEntity[]> {
    const users = await this.userRepository.find({
      relations: ['company_role', 'equipment', 'execute_tickets', 'tickets'],
    });
    return users;
  }

  async updateUser(id: string, userData: UpdateUserDto): Promise<UserEntity> {
    const user = await this.userRepository.findOne({
      where: { id: id },
      relations: ['company_role', 'equipment', 'execute_tickets', 'tickets'],
    });
    if (!user) {
      throw new HttpException(ERRORS.userNotFound, HttpStatus.NOT_FOUND);
    }
    return await this.userRepository.save({ ...user, ...userData });
  }

  async removeUser(id: string): Promise<DeleteResult> {
    const user = await this.userRepository.findOne({
      where: { id: id },
    });
    if (!user) {
      throw new HttpException(ERRORS.userNotFound, HttpStatus.NOT_FOUND);
    }
    return await this.userRepository.delete(id);
  }
}
