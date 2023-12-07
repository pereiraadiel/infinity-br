import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../../domain/services/auth.service';
import { RepositoriesModule } from './repositories.module';
import { UsecasesModule } from './usecases.module';
import { ServicesModule } from './services.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthConstant } from '../../domain/constants/auth.constant';

@Module({
  imports: [
    RepositoriesModule,
    UsecasesModule,
    ServicesModule,
    JwtModule.register({
      global: true,
      secret: AuthConstant.jwt.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
