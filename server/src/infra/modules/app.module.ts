import { Module } from '@nestjs/common';
import { UsecasesModule } from './usecases.module';
import { ProductModule } from './product.module';
import { RepositoriesModule } from './repositories.module';
import { PrismaModule } from './prisma.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [
    PrismaModule,
    UsecasesModule,
    RepositoriesModule,
    ServicesModule,
    ProductModule,
  ],
})
export class AppModule {}
