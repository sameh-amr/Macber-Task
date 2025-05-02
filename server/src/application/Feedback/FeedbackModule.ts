import { Module } from '@nestjs/common';
import { FeedbackRepositoryModule } from 'src/persistance/FeedbackDB/FeedbackRepository/FeedbackRepository.module';
import InsertFeedbackCommand from './InsertFeedback/InsertFeedbackCommand.service';
@Module({
  imports: [FeedbackRepositoryModule],
  exports: [InsertFeedbackCommand],
  providers: [InsertFeedbackCommand],
})
export class FeedbackModule {}
