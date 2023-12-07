import { Module } from '@nestjs/common';
import {
  PRODUCT_SERVICE,
  ProductService,
} from '../../domain/services/product.service';
import { UsecasesModule } from './usecases.module';
import { RepositoriesModule } from './repositories.module';

const productService = {
  provide: PRODUCT_SERVICE,
  useClass: ProductService,
};

@Module({
  imports: [UsecasesModule, RepositoriesModule],
  providers: [productService],
  exports: [productService],
})
export class ServicesModule {}
