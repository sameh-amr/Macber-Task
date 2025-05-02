import { Module } from '@nestjs/common';
import { UserRepositoryModule } from 'src/persistance/FeedbackDB/UserRepository/UserRepository.module';
import RegisterUserCommand from './RegisterUser/RegisterUserCommand.service';
import LoginUserCommand from './LoginUser/LoginUserCommand.service';
import { JwtModule } from '@nestjs/jwt';
RegisterUserCommand
@Module({
  imports: [UserRepositoryModule,JwtModule],
  exports: [RegisterUserCommand,LoginUserCommand],
  providers: [RegisterUserCommand,LoginUserCommand],
})
export class UserModule {}
