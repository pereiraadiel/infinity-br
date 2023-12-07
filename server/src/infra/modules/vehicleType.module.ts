import { Module } from '@nestjs/common';
import { VehicleTypeController } from '../controllers/vehicleType.controller';
import { VehicleTypeService } from '../../domain/services/vehicleType.service';
import { RepositoriesModule } from './repositories.module';
import { UsecasesModule } from './usecases.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [RepositoriesModule, UsecasesModule, ServicesModule],
  controllers: [VehicleTypeController],
  providers: [VehicleTypeService],
})
export class VehicleTypeModule {}
