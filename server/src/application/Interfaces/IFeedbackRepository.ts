import { Injectable } from '@nestjs/common';
import { FeedbackEntity } from 'src/domain/feedback.entity';
import IRepository from './IRepository';
@Injectable()
export abstract class IFeedbackRepository extends IRepository<FeedbackEntity> {
  abstract getAllFeedbacks(): Promise<FeedbackEntity[]>;
  abstract findFeedbackById(id: string): Promise<Partial<FeedbackEntity>>;
}
