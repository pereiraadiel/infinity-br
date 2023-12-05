import { DeliveryStatusEnum } from '../../../domain/enums/deliveryStatus.enum';

export class UpdateOneDeliveryRequest {
  id: string;
  price?: number;
  status?: DeliveryStatusEnum;
}
