import { Exclude } from 'class-transformer';
import { CompanyRolesEntity } from 'src/modules/company-roles/entity/company-roles.entity';
import { EquipmentEntity } from 'src/modules/equipment/entities/equipment.entity';
import { TicketEntity } from 'src/modules/ticket/entity/ticket.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ERole, EStatus } from '../user.constant';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @Column({ unique: true })
  email: string;
  @Column()
  @Exclude()
  password: string;
  @Column()
  name: string;
  @Column({ default: EStatus.new, enum: EStatus })
  status: EStatus;
  @Column({ default: ERole.user, enum: ERole })
  role: ERole;
  @ManyToOne(() => CompanyRolesEntity, (CompanyRole) => CompanyRole.users)
  @JoinColumn()
  company_role: CompanyRolesEntity;
  @OneToMany(() => EquipmentEntity, (equip) => equip.user)
  @JoinColumn()
  equipment: EquipmentEntity[];
  @ManyToOne(() => TicketEntity, (ticket) => ticket.executor)
  @JoinColumn()
  execute_tickets: TicketEntity[];
  @ManyToOne(() => TicketEntity, (ticket) => ticket.user)
  @JoinColumn()
  tickets: TicketEntity[];
}
