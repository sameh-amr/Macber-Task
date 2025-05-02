import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './persistance/DBConfig/DbConfig.module';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { FeedbackModule } from './application/Feedback/FeedbackModule';
import MainController from './api';
import { JwtStrategy } from './api/Auth/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';



@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    FeedbackModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '1d' },
      }),
    }),
  ],
  
  controllers: MainController,
  providers: [AppService,JwtStrategy],
})
export class AppModule {}
