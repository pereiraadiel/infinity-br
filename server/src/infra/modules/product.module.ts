import { Module } from '@nestjs/common';
import { ProductController } from '../controllers/product.controller';
import { ProductService } from '../../domain/services/product.service';
import { RepositoriesModule } from './repositories.module';
import { UsecasesModule } from './usecases.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [RepositoriesModule, UsecasesModule, ServicesModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
