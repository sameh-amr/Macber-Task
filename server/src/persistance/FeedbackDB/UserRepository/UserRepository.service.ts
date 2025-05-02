import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserRepository } from 'src/application/Interfaces/IAuthRepository';
import { UserEntity } from 'src/domain/User.entity';
import { User } from 'src/persistance/Schemas/user.schema';
@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectModel(User.name)
    private readonly model: Model<User>,
  ) {}
  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.model.findOne({ email }).exec();

    if (!user) return null;

    return {
      id: user._id.toString(),
      email: user.email,
      password: user.password,
    };
  }
  async create(user: UserEntity): Promise<Partial<UserEntity>> {
    const created = await this.model.create({
      email: user.email,
      password: user.password,
    });

    return {
      id: created._id.toString(),
      email: created.email,
    };
  }
}
