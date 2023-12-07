import { Module } from '@nestjs/common';
import { VehicleController } from '../controllers/vehicle.controller';
import { VehicleService } from '../../domain/services/vehicle.service';
import { RepositoriesModule } from './repositories.module';
import { UsecasesModule } from './usecases.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [RepositoriesModule, UsecasesModule, ServicesModule],
  controllers: [VehicleController],
  providers: [VehicleService],
})
export class VehicleModule {}
