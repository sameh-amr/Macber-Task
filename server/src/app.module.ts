import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './persistance/DBConfig/DbConfig.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FeedbackModule } from './application/Feedback/FeedbackModule';
import MainController from './api';
import { JwtStrategy } from './api/Auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './application/User/UserModule';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    FeedbackModule,
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'your-default-secret', 
      signOptions: { expiresIn: '60m' },
    }),
  ],

  controllers: MainController,
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
