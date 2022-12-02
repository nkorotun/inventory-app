import { EquipmentEntity } from 'src/modules/equipment/entities/equipment.entity';
import { TicketEntity } from 'src/modules/ticket/entity/ticket.entity';
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
export class EquipmentTypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @Column()
  name: string;
  @OneToMany(() => EquipmentEntity, (equipment) => equipment.type)
  @JoinColumn()
  equipment: EquipmentEntity[];
  @OneToMany(() => TicketEntity, (ticket) => ticket.type)
  @JoinColumn()
  ticket: TicketEntity;
}
