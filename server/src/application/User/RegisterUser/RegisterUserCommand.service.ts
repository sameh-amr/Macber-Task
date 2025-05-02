import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { IRegisterUserCommand } from './IRegisterUserCommand';
import { IUserRepository } from 'src/application/Interfaces/IAuthRepository';
import { UserEntity } from 'src/domain/User.entity';
@Injectable()
export default class RegisterUserCommand implements IRegisterUserCommand {
  constructor(private readonly userRepo: IUserRepository) {}

  async execute(email: string, password: string): Promise<Partial<UserEntity>> {
    const hash = await bcrypt.hash(password, 10);
    const user: UserEntity = {
      id: '',
      email,
      password: hash,
    };
    return this.userRepo.create(user);
  }
}
