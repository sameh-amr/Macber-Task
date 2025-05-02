import { UserEntity } from "src/domain/User.entity";

export interface IRegisterUserCommand {
  execute(email: string, password: string): Promise<Partial<UserEntity>>;
}