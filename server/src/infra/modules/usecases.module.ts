import { Module } from '@nestjs/common';

import {
  CREATE_ONE_PRODUCT_USECASE,
  CreateOneProductUsecase,
} from '../../domain/usecases/product/createOneProduct.usecase';
import {
  FIND_MANY_PRODUCTS_USECASE,
  FindManyProductsUsecase,
} from '../../domain/usecases/product/findManyProducts.usecase';
import {
  UPDATE_ONE_PRODUCT_USECASE,
  UpdateOneProductUsecase,
} from '../../domain/usecases/product/updateOneProduct.usecase';
import {
  DELETE_ONE_PRODUCT_USECASE,
  DeleteOneProductUsecase,
} from '../../domain/usecases/product/deleteOneProduct.usecase';

import {
  CREATE_ONE_USER_USECASE,
  CreateOneUserUsecase,
} from '../../domain/usecases/user/createOneUser.usecase';
import {
  FIND_MANY_USERS_USECASE,
  FindManyUsersUsecase,
} from '../../domain/usecases/user/findManyUsers.usecase';
import { UpdateOneUserUsecase } from '../../domain/usecases/user/updateOneUser.usecase';
import {
  DELETE_ONE_USER_USECASE,
  DeleteOneUserUsecase,
} from '../../domain/usecases/user/deleteOneUser.usecase';
import {
  CREATE_ONE_SHIPPING_USECASE,
  CreateOneShippingUsecase,
} from '../../domain/usecases/shipping/createOneShipping.usecase';
import {
  DELETE_ONE_SHIPPING_USECASE,
  DeleteOneShippingUsecase,
} from '../../domain/usecases/shipping/deleteOneShipping.usecase';
import {
  FIND_MANY_SHIPPINGS_USECASE,
  FindManyShippingsUsecase,
} from '../../domain/usecases/shipping/findManyShippings.usecase';
import {
  UPDATE_ONE_SHIPPING_USECASE,
  UpdateOneShippingUsecase,
} from '../../domain/usecases/shipping/updateOneShipping.usecase';
import {
  CREATE_ONE_VEHICLE_USECASE,
  CreateOneVehicleUsecase,
} from '../../domain/usecases/vehicle/createOneVehicle.usecase';
import {
  DELETE_ONE_VEHICLE_USECASE,
  DeleteOneVehicleUsecase,
} from '../../domain/usecases/vehicle/deleteOneVehicle.usecase';
import {
  FIND_MANY_VEHICLES_USECASE,
  FindManyVehiclesUsecase,
} from '../../domain/usecases/vehicle/findManyVehicles.usecase';
import {
  UPDATE_ONE_VEHICLE_USECASE,
  UpdateOneVehicleUsecase,
} from '../../domain/usecases/vehicle/updateOneVehicle.usecase';
import {
  CREATE_ONE_VEHICLE_TYPE_USECASE,
  CreateOneVehicleTypeUsecase,
} from '../../domain/usecases/vehicleType/createOneVehicleType.usecase';
import {
  DELETE_ONE_VEHICLE_TYPE_USECASE,
  DeleteOneVehicleTypeUsecase,
} from '../../domain/usecases/vehicleType/deleteOneVehicleType.usecase';
import {
  FIND_MANY_VEHICLE_TYPES_USECASE,
  FindManyVehicleTypesUsecase,
} from '../../domain/usecases/vehicleType/findManyVehicleTypes.usecase';
import {
  UPDATE_ONE_VEHICLE_TYPE_USECASE,
  UpdateOneVehicleTypeUsecase,
} from '../../domain/usecases/vehicleType/updateOneVehicleType.usecase';
import { RepositoriesModule } from './repositories.module';

// ----------------------------------------------------------

const createOneProduct = {
  provide: CREATE_ONE_PRODUCT_USECASE,
  useClass: CreateOneProductUsecase,
};
const findManyProducts = {
  provide: FIND_MANY_PRODUCTS_USECASE,
  useClass: FindManyProductsUsecase,
};
const updateOneProduct = {
  provide: UPDATE_ONE_PRODUCT_USECASE,
  useClass: UpdateOneProductUsecase,
};
const deleteOneProduct = {
  provide: DELETE_ONE_PRODUCT_USECASE,
  useClass: DeleteOneProductUsecase,
};

const createOneUser = {
  provide: CREATE_ONE_USER_USECASE,
  useClass: CreateOneUserUsecase,
};
const findManyUsers = {
  provide: FIND_MANY_USERS_USECASE,
  useClass: FindManyUsersUsecase,
};
const updateOneUser = {
  provide: CREATE_ONE_USER_USECASE,
  useClass: UpdateOneUserUsecase,
};
const deleteOneUser = {
  provide: DELETE_ONE_USER_USECASE,
  useClass: DeleteOneUserUsecase,
};

const createOneShipping = {
  provide: CREATE_ONE_SHIPPING_USECASE,
  useClass: CreateOneShippingUsecase,
};
const findManyShippings = {
  provide: FIND_MANY_SHIPPINGS_USECASE,
  useClass: FindManyShippingsUsecase,
};
const updateOneShipping = {
  provide: UPDATE_ONE_SHIPPING_USECASE,
  useClass: UpdateOneShippingUsecase,
};
const deleteOneShipping = {
  provide: DELETE_ONE_SHIPPING_USECASE,
  useClass: DeleteOneShippingUsecase,
};

const createOneVehicle = {
  provide: CREATE_ONE_VEHICLE_USECASE,
  useClass: CreateOneVehicleUsecase,
};
const findManyVehicles = {
  provide: FIND_MANY_VEHICLES_USECASE,
  useClass: FindManyVehiclesUsecase,
};
const updateOneVehicle = {
  provide: UPDATE_ONE_VEHICLE_USECASE,
  useClass: UpdateOneVehicleUsecase,
};
const deleteOneVehicle = {
  provide: DELETE_ONE_VEHICLE_USECASE,
  useClass: DeleteOneVehicleUsecase,
};

const createOneVehicleType = {
  provide: CREATE_ONE_VEHICLE_TYPE_USECASE,
  useClass: CreateOneVehicleTypeUsecase,
};
const findManyVehicleTypes = {
  provide: FIND_MANY_VEHICLE_TYPES_USECASE,
  useClass: FindManyVehicleTypesUsecase,
};
const updateOneVehicleType = {
  provide: UPDATE_ONE_VEHICLE_TYPE_USECASE,
  useClass: UpdateOneVehicleTypeUsecase,
};
const deleteOneVehicleType = {
  provide: DELETE_ONE_VEHICLE_TYPE_USECASE,
  useClass: DeleteOneVehicleTypeUsecase,
};

@Module({
  imports: [RepositoriesModule],
  providers: [
    createOneProduct,
    findManyProducts,
    updateOneProduct,
    deleteOneProduct,

    createOneUser,
    findManyUsers,
    updateOneUser,
    deleteOneUser,

    createOneShipping,
    findManyShippings,
    updateOneShipping,
    deleteOneShipping,

    createOneVehicle,
    findManyVehicles,
    updateOneVehicle,
    deleteOneVehicle,

    createOneVehicleType,
    findManyVehicleTypes,
    updateOneVehicleType,
    deleteOneVehicleType,
  ],
  exports: [
    createOneProduct,
    findManyProducts,
    updateOneProduct,
    deleteOneProduct,

    createOneUser,
    findManyUsers,
    updateOneUser,
    deleteOneUser,

    createOneShipping,
    findManyShippings,
    updateOneShipping,
    deleteOneShipping,

    createOneVehicle,
    findManyVehicles,
    updateOneVehicle,
    deleteOneVehicle,

    createOneVehicleType,
    findManyVehicleTypes,
    updateOneVehicleType,
    deleteOneVehicleType,
  ],
})
export class UsecasesModule {}
