import { Controller, Post, Body } from '@nestjs/common';
import LoginUserCommand from 'src/application/User/LoginUser/LoginUserCommand.service';
import RegisterUserCommand from 'src/application/User/RegisterUser/RegisterUserCommand.service';

@Controller('api/auth')
class AuthController {
  constructor(private readonly registerUserCommand: RegisterUserCommand,private readonly loginUserCommand: LoginUserCommand) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return this.registerUserCommand.execute(body.email, body.password);
  }
  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.loginUserCommand.execute(body.email, body.password);
  }
}

export default AuthController;
