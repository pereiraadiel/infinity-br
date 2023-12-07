import * as dotenv from 'dotenv';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { AppModule } from './infra/modules/app.module';
import { ValidationPipe } from '@nestjs/common';
import { ExceptionHandler } from './infra/handlers/exception.handler';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new ExceptionHandler());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Infinity Brasil API')
    .setDescription('API de gerenciamento de fretes')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
