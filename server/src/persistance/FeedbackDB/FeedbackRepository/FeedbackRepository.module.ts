import { Module } from '@nestjs/common';
import { IFeedbackRepository } from 'src/application/Interfaces/IFeedbackRepository';
import { FeedbackRepository } from './FeedbackRepository.service';
@Module({
  providers: [{ provide: IFeedbackRepository, useClass: FeedbackRepository }],
  exports: [IFeedbackRepository],
})
export class FeedbackRepositoryModule {}
