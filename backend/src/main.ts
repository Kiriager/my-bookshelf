import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { cors } from 'config/cors';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.enableCors({ origin: cors.origin, credentials: true });
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.BACKEND_PORT);
}
bootstrap();
