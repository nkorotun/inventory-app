import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class CompanyRolesEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @Column()
  name: string;
  @OneToMany(() => UserEntity, (User) => User.company_role)
  @JoinColumn()
  users: UserEntity[];
}
