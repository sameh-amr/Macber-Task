import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { ILoginUserCommand } from './ILoginUserCommand';
import { IUserRepository } from 'src/application/Interfaces/IAuthRepository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export default class LoginUserCommand implements ILoginUserCommand {
  constructor(
    private readonly userRepo: IUserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async execute(email: string, password: string): Promise<{ access_token: string }> {
    const user = await this.userRepo.findByEmail(email);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = { sub: user.id, email: user.email };
    const token = await this.jwtService.signAsync(payload);
    return { access_token: token };
  }
}
