/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { Transport } from '@nestjs/microservices';

// Create a logger instance
const logger = new Logger('main');

// Create microservice option
const microserviceOptions = {
  transport: Transport.REDIS,
  options: {
    url: 'redis://localhost:6379',
  }
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, microserviceOptions);
  await app.listen();
  Logger.log(
    `🚀 Microservice is running...`
  );
}

bootstrap();
