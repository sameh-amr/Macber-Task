import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FeedbackEntity } from 'src/domain/feedback.entity';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import InsertFeedbackCommand from 'src/application/Feedback/InsertFeedback/InsertFeedbackCommand.service';
import GetAllFeedbacksCommand from 'src/application/Feedback/GetAllFeedbacks/GetAllFeedbacksCommand.service';
import GetFeedbackByIdCommand from 'src/application/Feedback/GetFeedbackById/GetFeedbackByIdCommand.service';

@Controller('api/feedbacks')
class FeedbackController {
  constructor(
    private insertFeedbackCommand: InsertFeedbackCommand,
    private getAllFeedbacksCommand: GetAllFeedbacksCommand,
    private getFeedbackCommandById: GetFeedbackByIdCommand,
  ) {}
  @Post()
  async insertNewFeedback(@Body() feedbackItem: FeedbackEntity) {
    return await this.insertFeedbackCommand.execute(feedbackItem);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getAllFeedbacks() {
    return await this.getAllFeedbacksCommand.execute();
  }
  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  async getFeedbackById(@Param('id') id: string) {
    return await this.getFeedbackCommandById.execute(id);
  }
}

export default FeedbackController;
