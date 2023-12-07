import { Module } from '@nestjs/common';
import { UsecasesModule } from './usecases.module';
import { ProductModule } from './product.module';
import { RepositoriesModule } from './repositories.module';
import { PrismaModule } from './prisma.module';
import { ServicesModule } from './services.module';
import { ShippingModule } from './shipping.module';
import { UserModule } from './user.module';
import { VehicleModule } from './vehicle.module';
import { VehicleTypeModule } from './vehicleType.module';
import { DeliveryModule } from './delivery.module';
import { HashModule } from './hash.module';
import { AuthModule } from './auth.module';
import { AuthInterceptorModule } from './authInterceptor.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../guards/auth.guard';
import { RoleGuard } from '../guards/role.guard';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    AuthInterceptorModule,
    HashModule,
    UsecasesModule,
    RepositoriesModule,
    ServicesModule,
    ProductModule,
    ShippingModule,
    DeliveryModule,
    UserModule,
    VehicleModule,
    VehicleTypeModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: AuthGuard },
    { provide: APP_GUARD, useClass: RoleGuard },
  ],
})
export class AppModule {}
