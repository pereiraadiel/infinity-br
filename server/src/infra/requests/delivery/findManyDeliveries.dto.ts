import { DeliveryStatusEnum } from './../../../domain/enums/deliveryStatus.enum';

export class FindManyDeliveriesRequest {
  status?: DeliveryStatusEnum;
}
