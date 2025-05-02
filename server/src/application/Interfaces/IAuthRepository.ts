import { Injectable } from '@nestjs/common';
import IRepository from './IRepository';
import { User } from 'src/persistance/Schemas/user.schema';

@Injectable()
export abstract class IUserRepository extends IRepository<User> {
}