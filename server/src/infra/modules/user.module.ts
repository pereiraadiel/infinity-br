import { Module } from '@nestjs/common';
import { UserController } from '../controllers/user.controller';
import { UserService } from '../../domain/services/user.service';
import { RepositoriesModule } from './repositories.module';
import { UsecasesModule } from './usecases.module';
import { ServicesModule } from './services.module';

@Module({
  imports: [RepositoriesModule, UsecasesModule, ServicesModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
