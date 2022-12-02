import { EquipmentTypeEntity } from 'src/modules/equipment-type/entity/equipment-type.entity';
import { TicketEntity } from 'src/modules/ticket/entity/ticket.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EStatus } from '../equipment.constant';

@Entity()
export class EquipmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @Column()
  name: string;
  @Column({ default: EStatus.stored, enum: EStatus })
  status: EStatus;
  @Column({ nullable: true })
  description: string;
  @Column()
  price: number;
  @Column()
  distributor: string;
  @Column({ nullable: true })
  assignedDate: Date;
  @ManyToOne(() => EquipmentTypeEntity, (equipType) => equipType.equipment)
  @JoinColumn()
  type: EquipmentTypeEntity;
  @ManyToOne(() => UserEntity, (user) => user.equipment)
  @JoinColumn()
  user: UserEntity;
  @ManyToOne(() => TicketEntity, (ticket) => ticket.equipment)
  @JoinColumn()
  ticket: TicketEntity;
}
