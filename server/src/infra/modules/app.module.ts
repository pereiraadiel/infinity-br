import { Module } from '@nestjs/common';
import { UsecasesModule } from './usecases.module';
import { ProductModule } from './product.module';

@Module({
  imports: [UsecasesModule, ProductModule],
})
export class AppModule {}
