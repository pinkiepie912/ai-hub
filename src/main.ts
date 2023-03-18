import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const bootstrap = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);

  const isProduction = process.env.NODE_ENV === 'production';

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: isProduction,
      transform: true,
      whitelist: true,
    })
  );

  if (!isProduction) {
    const swaggerConfig = new DocumentBuilder()
      .setTitle('AI-hub')
      .setDescription('AI-hub api server')
      .setVersion('0.1.0')
      .addTag('AI-hum')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, swaggerConfig);
    SwaggerModule.setup('swagger', app, document);
  }

  await app.listen(process.env.PORT || 8081);
};

bootstrap();
