import { ShippingStatusEnum } from '../../../domain/enums/shippingStatus.enum';

export class UpdateOneShippingRequest {
  id: string;
  distanceInMeters?: number;
  status?: ShippingStatusEnum;
}
