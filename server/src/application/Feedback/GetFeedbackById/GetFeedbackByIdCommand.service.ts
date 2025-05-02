import { Injectable } from '@nestjs/common';
import { IFeedbackRepository } from 'src/application/Interfaces/IFeedbackRepository';
import { IGetFeedbackByIdCommand } from './IGetFeedbackById';
import { FeedbackEntity } from 'src/domain/feedback.entity';
@Injectable()
export default class GetFeedbackByIdCommand implements IGetFeedbackByIdCommand {
  constructor(private fbRepo: IFeedbackRepository) {}
  async execute(
    id: string,
  ): Promise<Partial<FeedbackEntity>> {
    try {
      return await this.fbRepo.findFeedbackById(id);
    } catch (err) {
      throw new Error(err);
    }
  }
}
