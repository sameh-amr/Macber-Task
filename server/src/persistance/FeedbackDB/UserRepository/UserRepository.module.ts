import { Module } from '@nestjs/common';
import { IUserRepository } from 'src/application/Interfaces/IAuthRepository';
import { UserRepository } from './UserRepository.service';
import { DatabaseModule } from 'src/persistance/DBConfig/DbConfig.module';
@Module({
  imports: [DatabaseModule],
  providers: [{ provide: IUserRepository, useClass: UserRepository }],
  exports: [IUserRepository],
})
export class UserRepositoryModule {}
