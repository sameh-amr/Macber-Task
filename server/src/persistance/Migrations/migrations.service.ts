// src/database/migration.service.ts
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User,UserSchema } from '../Schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MigrationService implements OnApplicationBootstrap {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private configService: ConfigService,
  ) {}

  async onApplicationBootstrap() {
    await this.createInitialUser();
  }

  private async createInitialUser() {
    const adminEmail = this.configService.get<string>('INITIAL_ADMIN_EMAIL');
    const adminPassword = this.configService.get<string>('INITIAL_ADMIN_PASSWORD');
    
    if (!adminEmail || !adminPassword) {
      throw new Error('Initial admin credentials not configured');
    }

    const existingUser = await this.userModel.findOne({ email: adminEmail });
    if (!existingUser) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await this.userModel.create({
        email: adminEmail,
        password: hashedPassword,
      });
      console.log('Initial admin user created successfully');
    }
  }
}