import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(new ValidationPipe());

  const congig = new DocumentBuilder()
  .setTitle('Auth API')
  .setDescription('API documentation for auth')
  .setVersion('1.0.0')
  .setContact('Alex Kuklev', 'https://github.com/Necromayhem', 'example@mail.com')
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, congig);

  SwaggerModule.setup('/docs', app, document);

  await app.listen(3000);
}
bootstrap();

