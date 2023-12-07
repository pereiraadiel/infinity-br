import { Module } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from '../../domain/repositories/product.repository';
import { ProductConcreteRepository } from '../repositories/productConcrete.repository';

import { USER_REPOSITORY } from '../../domain/repositories/user.repository';
import { UserConcreteRepository } from '../repositories/userConcrete.repository';

import { SHIPPING_REPOSITORY } from '../../domain/repositories/shipping.repository';
import { ShippingConcreteRepository } from '../repositories/shippingConcrete.repository';

import { DELIVERY_REPOSITORY } from '../../domain/repositories/delivery.repository';
import { DeliveryConcreteRepository } from '../repositories/deliveryConcrete.repository';

import { VEHICLE_REPOSITORY } from '../../domain/repositories/vehicle.repository';
import { VehicleConcreteRepository } from '../repositories/vehicleConcrete.repository';

import { VEHICLE_TYPE_REPOSITORY } from '../../domain/repositories/vehicleType.repository';
import { VehicleTypeConcreteRepository } from '../repositories/vehicleTypeConcrete.repository';

const productRepository = {
  provide: PRODUCT_REPOSITORY,
  useClass: ProductConcreteRepository,
};

const userRepository = {
  provide: USER_REPOSITORY,
  useClass: UserConcreteRepository,
};

const shippingRepository = {
  provide: SHIPPING_REPOSITORY,
  useClass: ShippingConcreteRepository,
};

const deliveryRepository = {
  provide: DELIVERY_REPOSITORY,
  useClass: DeliveryConcreteRepository,
};

const vehicleRepository = {
  provide: VEHICLE_REPOSITORY,
  useClass: VehicleConcreteRepository,
};

const vehicleTypeRepository = {
  provide: VEHICLE_TYPE_REPOSITORY,
  useClass: VehicleTypeConcreteRepository,
};

@Module({
  imports: [],
  providers: [
    productRepository,
    userRepository,
    shippingRepository,
    deliveryRepository,
    vehicleRepository,
    vehicleTypeRepository,
  ],
  exports: [
    productRepository,
    userRepository,
    shippingRepository,
    deliveryRepository,
    vehicleRepository,
    vehicleTypeRepository,
  ],
})
export class RepositoriesModule {}
