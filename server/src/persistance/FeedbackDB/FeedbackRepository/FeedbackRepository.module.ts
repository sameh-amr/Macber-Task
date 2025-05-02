import { Module } from '@nestjs/common';
import { IFeedbackRepository } from 'src/application/Interfaces/IFeedbackRepository';
import { FeedbackRepository } from './FeedbackRepository.service';
import { DatabaseModule } from 'src/persistance/DBConfig/DbConfig.module';

@Module({
  imports: [DatabaseModule],
  providers: [{ useClass: FeedbackRepository, provide: IFeedbackRepository }],
  exports: [IFeedbackRepository],
})
export class FeedbackRepositoryModule {}
