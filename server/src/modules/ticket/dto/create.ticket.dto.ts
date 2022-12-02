import { EAction, EStatus } from '../ticket.constant';

export class CreateTicketDto {
  action: EAction;
  status: EStatus;
  comment: string;
}
