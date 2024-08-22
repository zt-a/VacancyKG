import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
// import * as csurf from 'csurf';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 8000;

  app.use(cookieParser());
  // app.use(csurf({ cookie: true }));

  const config = new DocumentBuilder()
    .setTitle('Vacancy KG')
    .setDescription('Документация REST API')
    .setVersion('1.0.0')
    .addTag('VacancyKG')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api', app, document);
  app.enableCors({ origin: 'http://localhost:3000' });
  await app.listen(PORT, () => {
    console.log(`Server started on port = ${PORT}`);
  });
}
bootstrap();
