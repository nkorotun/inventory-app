import { EquipmentTypeEntity } from 'src/modules/equipment-type/entity/equipment-type.entity';
import { EquipmentEntity } from 'src/modules/equipment/entities/equipment.entity';
import { UserEntity } from 'src/modules/user/entities/user.entity';
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
import { EAction, EStatus } from '../ticket.constant';

@Entity()
export class TicketEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @Column({ enum: EAction })
  action: EAction;
  @Column({ nullable: true })
  comment: string;
  @Column({ default: EStatus.new, enum: EStatus })
  status: EStatus;
  @ManyToOne(() => EquipmentTypeEntity, (equipType) => equipType.ticket)
  @JoinColumn()
  type: EquipmentTypeEntity;
  @ManyToOne(() => UserEntity, (user) => user.execute_tickets)
  @JoinColumn()
  executor: UserEntity;
  @ManyToOne(() => UserEntity, (user) => user.tickets)
  @JoinColumn()
  user: UserEntity;
  @OneToMany(() => EquipmentEntity, (equipment) => equipment.ticket)
  @JoinColumn()
  equipment: EquipmentEntity[];
}
