import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';
@Schema({ timestamps: true })
export class Feedback extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true,unique:false })
  email: string;
  

  @Prop({ required: true })
  message: string;
  @Prop({ required: true, min: 0, max: 5 })
  rating: number;
}
export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
