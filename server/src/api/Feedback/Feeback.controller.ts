import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackEntity } from 'src/domain/feedback.entity';
import InsertFeedbackCommand from 'src/application/Feedback/InsertFeedback/InsertFeedbackCommand.service';

@Controller('api/Feedback')
class FeedbackController {
  constructor(private insertFeedbackCommand: InsertFeedbackCommand) {}
  @Post('')
  async insertNewFeedback(@Body() feedbackItem: FeedbackEntity) {
    return await this.insertFeedbackCommand.execute(feedbackItem);
  }
}

export default FeedbackController;
