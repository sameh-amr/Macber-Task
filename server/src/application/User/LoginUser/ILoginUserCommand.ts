export interface ILoginUserCommand {
    execute(email: string, password: string): Promise<{ access_token: string }>;
  }