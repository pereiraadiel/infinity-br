import { Module } from '@nestjs/common';
import {
  PRODUCT_SERVICE,
  ProductService,
} from '../../domain/services/product.service';
import { UsecasesModule } from './usecases.module';
import { RepositoriesModule } from './repositories.module';
import { USER_SERVICE, UserService } from '../../domain/services/user.service';
import {
  VEHICLE_SERVICE,
  VehicleService,
} from '../../domain/services/vehicle.service';
import {
  VEHICLE_TYPE_SERVICE,
  VehicleTypeService,
} from '../../domain/services/vehicleType.service';
import {
  SHIPPING_SERVICE,
  ShippingService,
} from '../../domain/services/shipping.service';
import {
  DELIVERY_SERVICE,
  DeliveryService,
} from '../../domain/services/delivery.service';

const productService = {
  provide: PRODUCT_SERVICE,
  useClass: ProductService,
};
const userService = {
  provide: USER_SERVICE,
  useClass: UserService,
};
const shippingService = {
  provide: SHIPPING_SERVICE,
  useClass: ShippingService,
};
const deliveryService = {
  provide: DELIVERY_SERVICE,
  useClass: DeliveryService,
};
const vehicleService = {
  provide: VEHICLE_SERVICE,
  useClass: VehicleService,
};
const vehicleTypeService = {
  provide: VEHICLE_TYPE_SERVICE,
  useClass: VehicleTypeService,
};

@Module({
  imports: [UsecasesModule, RepositoriesModule],
  providers: [
    productService,
    userService,
    deliveryService,
    vehicleService,
    vehicleTypeService,
    shippingService,
  ],
  exports: [
    productService,
    userService,
    deliveryService,
    vehicleService,
    vehicleTypeService,
    shippingService,
  ],
})
export class ServicesModule {}
