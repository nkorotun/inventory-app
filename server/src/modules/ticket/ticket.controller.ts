import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { RolesGuard } from 'src/guards/roles.guard';
import { ERole } from 'src/modules/user/user.constant';
import { CreateTicketDto } from './dto/create.ticket.dto';
import { UpdateTicketDto } from './dto/update.ticket.dto';
import { TICKET_ROUTES } from './ticket.constant';
import { TicketService } from './ticket.service';

@Controller(TICKET_ROUTES.main)
export class TicketController {
  constructor(private ticketTypeService: TicketService) {}

  @Roles(ERole.admin, ERole.manager)
  @Post(TICKET_ROUTES.create)
  @UseGuards(JwtAuthGuard, RolesGuard)
  createTicket(@Body() ticketData: CreateTicketDto) {
    return this.ticketTypeService.createTicket(ticketData);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(TICKET_ROUTES.getAll)
  getAllTickets() {
    return this.ticketTypeService.getAllTickets();
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(TICKET_ROUTES.getById)
  getTicket(@Param('id') id) {
    return this.ticketTypeService.getTicket(id);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Put(TICKET_ROUTES.getById)
  updateTicket(@Param('id') id, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketTypeService.updateTicket(id, updateTicketDto);
  }

  @Roles(ERole.admin, ERole.manager)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(TICKET_ROUTES.getById)
  removeTicket(@Param('id') id) {
    return this.ticketTypeService.removeTicket(id);
  }
}
