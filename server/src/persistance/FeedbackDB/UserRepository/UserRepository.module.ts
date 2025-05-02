import { Module } from '@nestjs/common';
import { IUserRepository } from 'src/application/Interfaces/IAuthRepository';
import { UserRepository } from './UserRepository.service';
@Module({
  providers: [{ provide: IUserRepository, useClass: UserRepository }],
  exports: [IUserRepository],
})
export class UserRepositoryModule {}
