import { ShippingStatusEnum } from '../../../domain/enums/shippingStatus.enum';

export class FindManyShippingsRequest {
  status?: ShippingStatusEnum;
}
