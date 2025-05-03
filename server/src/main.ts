import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './persistance/DBConfig/DbConfig.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.enableCors({
      origin: /https?:\/\/localhost(:\d+)?$/, 
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: 'Content-Type, Authorization',
      credentials: true, // Enable cookies/auth headers if needed
    });
  const databaseService = app.get(DatabaseService);
  await app.listen(3000);
  await databaseService.checkConnection();
}
bootstrap();
