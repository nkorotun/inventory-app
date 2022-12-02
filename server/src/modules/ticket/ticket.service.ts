import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERRORS } from 'src/constants/errors';
import { DeleteResult, Repository } from 'typeorm';
import { CreateTicketDto } from './dto/create.ticket.dto';
import { UpdateTicketDto } from './dto/update.ticket.dto';
import { TicketEntity } from './entity/ticket.entity';

@Injectable()
export class TicketService {
  constructor(
    @InjectRepository(TicketEntity)
    private ticketRepository: Repository<TicketEntity>,
  ) {}

  async createTicket(ticketData: CreateTicketDto): Promise<TicketEntity> {
    return await this.ticketRepository.save(ticketData);
  }

  async getAllTickets(): Promise<TicketEntity[]> {
    return await this.ticketRepository.find({
      relations: ['type', 'executor', 'user', 'equipment'],
    });
  }

  async getTicket(id: string): Promise<TicketEntity> {
    try {
      return await this.ticketRepository.findOneOrFail({
        where: { id: id },
        relations: ['type', 'executor', 'user', 'equipment'],
      });
    } catch (e) {
      throw new HttpException(ERRORS.requestNotFound, HttpStatus.NOT_FOUND);
    }
  }

  async updateTicket(
    id: string,
    ticketData: UpdateTicketDto,
  ): Promise<TicketEntity> {
    const ticket = await this.ticketRepository.findOne({
      where: { id: id },
      relations: ['type', 'executor', 'user', 'equipment'],
    });
    if (!ticket) {
      throw new HttpException(
        ERRORS.equipmentTypeNotFound,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.ticketRepository.save({
      ...ticket,
      ...ticketData,
    });
  }

  async removeTicket(id: string): Promise<DeleteResult> {
    const role = await this.ticketRepository.findOne({
      where: { id: id },
      relations: ['type', 'executor', 'user', 'equipment'],
    });
    if (!role) {
      throw new HttpException(
        ERRORS.equipmentTypeNotFound,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.ticketRepository.delete(id);
  }
}
