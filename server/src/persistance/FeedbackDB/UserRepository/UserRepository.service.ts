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
  async create(user: UserEntity): Promise<UserEntity> {
    const created = await this.model.create({
      email: user.email,
      password: user.password,
    });

    return {
      id: created._id.toString(),
      email: created.email,
      password: created.password,
    };
  }
}
