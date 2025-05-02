import { FeedbackEntity } from 'src/domain/feedback.entity';
export interface IInsertFeedbackCommand {
  execute(feedbackItem: FeedbackEntity): Promise<Partial<FeedbackEntity>>;
}
