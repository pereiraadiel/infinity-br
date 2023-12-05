import { DeliveryStatusEnum } from '../../enums/deliveryStatus.enum';

export class UpdateOneDeliveryDTO {
  id: string;
  price?: number;
  status?: DeliveryStatusEnum;
}
