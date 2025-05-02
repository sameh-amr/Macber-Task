import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback } from 'src/domain/feedback.entity';
import IRepository from './IRepository';
@Injectable()
export abstract class IFeedbackRepository extends IRepository<Feedback> {
}