import { Injectable } from '@nestjs/common';
import IRepository from './IRepository';
import { UserEntity } from 'src/domain/User.entity';


@Injectable()
export abstract class IUserRepository extends IRepository<UserEntity> {
    
}