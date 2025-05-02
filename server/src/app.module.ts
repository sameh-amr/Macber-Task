import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './persistance/DBConfig/DbConfig.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FeedbackModule } from './application/Feedback/FeedbackModule';
import MainController from './api';
import { JwtStrategy } from './persistance/strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './application/User/UserModule';
import { JwtConfigModule } from './persistance/strategy/jwtconfig.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtConfigModule,
    DatabaseModule,
    FeedbackModule,
    UserModule,
  ],

  controllers: MainController,
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
