import { Module } from '@nestjs/common';
import { IFeedbackRepository } from 'src/application/Interfaces/IFeedbackRepository';
import { FeedbackRepository } from './FeedbackRepository.service';

@Module({
  providers: [{ useClass: FeedbackRepository, provide: IFeedbackRepository }],
  exports: [IFeedbackRepository],
})
export class FeedbackRepositoryModule {}
