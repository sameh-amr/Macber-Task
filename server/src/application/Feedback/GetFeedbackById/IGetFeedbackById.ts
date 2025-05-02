import { FeedbackEntity } from 'src/domain/feedback.entity';
export interface IGetFeedbackByIdCommand {
  execute(id: string): Promise<Partial<FeedbackEntity>>;
}
