import { Module } from '@nestjs/common';
import { ShippingController } from '../controllers/shipping.controller';
import { ShippingService } from '../../domain/services/shipping.service';
import { RepositoriesModule } from './repositories.module';
import { UsecasesModule } from './usecases.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [RepositoriesModule, UsecasesModule, ServicesModule],
  controllers: [ShippingController],
  providers: [ShippingService],
})
export class ShippingModule {}
