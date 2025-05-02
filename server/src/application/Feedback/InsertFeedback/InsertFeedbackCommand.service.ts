import { Injectable } from '@nestjs/common';
import { IFeedbackRepository } from 'src/application/Interfaces/IFeedbackRepository';
import { IInsertFeedbackCommand } from './IInsetFeedbackCommand';
import { FeedbackEntity } from 'src/domain/feedback.entity';
@Injectable()
export default class InsertFeedbackCommand implements IInsertFeedbackCommand {
  constructor(private fbRepo: IFeedbackRepository) {}
  async execute(
    FeedbackItem: FeedbackEntity,
  ): Promise<Partial<FeedbackEntity>> {
    try {
      return await this.fbRepo.create(FeedbackItem);
    } catch (err) {
      throw new Error(err);
    }
  }
}
