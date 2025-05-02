import { FeedbackEntity } from 'src/domain/feedback.entity';
export interface IGetAllFeedbacksCommand {
  execute(): Promise<FeedbackEntity[]>;
}
