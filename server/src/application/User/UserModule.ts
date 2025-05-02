import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/persistance/FeedbackDB/UserRepository/UserRepository.module';
import RegisterUserCommand from './RegisterUser/RegisterUserCommand.service';
RegisterUserCommand
@Module({
  imports: [UserRepositoryModule],
  exports: [RegisterUserCommand],
  providers: [RegisterUserCommand],
})
export class UserModule {}
