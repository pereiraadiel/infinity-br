import { ShippingStatusEnum } from '../../enums/shippingStatus.enum';

export class UpdateOneShippingDTO {
  id: string;
  distanceInMeters?: number;
  status?: ShippingStatusEnum;
}
