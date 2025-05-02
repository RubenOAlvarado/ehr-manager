import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { buildSwaggerModule } from './shared/utils/swagger.builder.utility';
import { API_BASE_PATH } from './shared/configs/api.configs';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }));
  app.setGlobalPrefix(API_BASE_PATH);
  await buildSwaggerModule(app);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap().catch((error) => {
  console.error('Failed to start application:', error);
  process.exit(1);
});
