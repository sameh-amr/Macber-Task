import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseService } from './persistance/DBConfig/DbConfig.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const databaseService = app.get(DatabaseService);
  await databaseService.checkConnection();
  await app.listen(3000);

}
bootstrap();
