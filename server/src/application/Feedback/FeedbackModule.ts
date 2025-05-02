import { Module } from '@nestjs/common';
import { FeedbackRepositoryModule } from 'src/persistance/FeedbackDB/FeedbackRepository/FeedbackRepository.module';
import InsertFeedbackCommand from './InsertFeedback/InsertFeedbackCommand.service';
import GetFeedbackByIdCommand from './GetFeedbackById/GetFeedbackByIdCommand.service';
import GetAllFeedbacksCommand from './GetAllFeedbacks/GetAllFeedbacksCommand.service';
@Module({
  imports: [FeedbackRepositoryModule],
  exports: [InsertFeedbackCommand,GetFeedbackByIdCommand,GetAllFeedbacksCommand],
  providers: [InsertFeedbackCommand,GetFeedbackByIdCommand,GetAllFeedbacksCommand],
})
export class FeedbackModule {}
