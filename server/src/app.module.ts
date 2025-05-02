import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './persistance/DBConfig/DbConfig.module';
import { ConfigModule } from '@nestjs/config';
import { FeedbackModule } from './application/Feedback/FeedbackModule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env
    DatabaseModule,
    FeedbackModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
