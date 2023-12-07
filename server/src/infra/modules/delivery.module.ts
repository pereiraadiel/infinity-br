import { Module } from '@nestjs/common';
import { DeliveryController } from '../controllers/delivery.controller';
import { DeliveryService } from '../../domain/services/delivery.service';
import { RepositoriesModule } from './repositories.module';
import { UsecasesModule } from './usecases.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [RepositoriesModule, UsecasesModule, ServicesModule],
  controllers: [DeliveryController],
  providers: [DeliveryService],
})
export class DeliveryModule {}
