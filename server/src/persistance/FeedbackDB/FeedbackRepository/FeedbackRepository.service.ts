import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFeedbackRepository } from 'src/application/Interfaces/IFeedbackRepository';
import { FeedbackEntity } from 'src/domain/feedback.entity';
import { Feedback } from 'src/persistance/Schemas/feedback.schema';
@Injectable()
export class FeedbackRepository implements IFeedbackRepository {
  constructor(
    @InjectModel(Feedback.name)
    private readonly model: Model<Feedback>,
  ) {}
  async create(entity: Partial<FeedbackEntity>): Promise<FeedbackEntity> {
    const created = await this.model.create({
      name: entity.name,
      email: entity.email,
      message: entity.message,
      rating: entity.rating,
    });

    return {
      id: created._id.toString(),
      name: created.name,
      email: created.email,
      message: created.message,
      rating: created.rating,
    };
  }
}
