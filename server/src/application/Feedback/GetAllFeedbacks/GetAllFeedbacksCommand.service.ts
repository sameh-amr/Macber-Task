import { Injectable } from '@nestjs/common';
import { IFeedbackRepository } from 'src/application/Interfaces/IFeedbackRepository';
import { IGetAllFeedbacksCommand } from './IGetAllFeedbacks';
import { FeedbackEntity } from 'src/domain/feedback.entity';
@Injectable()
export default class GetAllFeedbacksCommand implements IGetAllFeedbacksCommand {
  constructor(private fbRepo: IFeedbackRepository) {}
  async execute(): Promise<FeedbackEntity[]> {
    try {
      return await this.fbRepo.getAllFeedbacks();
    } catch (err) {
      throw new Error(err);
    }
  }
}
