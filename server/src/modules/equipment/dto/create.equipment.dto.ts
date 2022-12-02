import { EStatus } from '../equipment.constant';

export class CreateEquipmentDto {
  name: string;
  status: EStatus;
  description: string;
  price: number;
  distributor: string;
}
