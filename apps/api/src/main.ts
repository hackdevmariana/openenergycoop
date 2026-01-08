import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para permitir peticiones desde Nuxt (localhost:3001)
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });

  // O más permisivo en desarrollo (cualquier origen)
  // app.enableCors();

  await app.listen(3000);
  console.log('API running on http://localhost:3000');
}
bootstrap();
