import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseService } from './DbConfig.service';
import { Feedback, FeedbackSchema } from '../Schemas/feedback.schema';
import { User, UserSchema } from '../Schemas/user.schema';
import { MigrationService } from '../Migrations/migrations.service';
@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    }),

    MongooseModule.forFeature([
      { name: Feedback.name, schema: FeedbackSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  providers: [DatabaseService,MigrationService],
  exports: [MongooseModule],
})
export class DatabaseModule {}
