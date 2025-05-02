import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

@Injectable()
export class DatabaseService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  async checkConnection() {
    try {
      const startTime = Date.now();
      const pingResult = await this.connection.db.admin().ping();
      const pingTime = Date.now() - startTime;
      
      console.log('MongoDB connection check:');
      console.log(`- Database: ${this.connection.db.databaseName}`);
      console.log(`- Host: ${this.connection.host}:${this.connection.port}`);
      console.log('- Ping result:', pingResult);
      
      return true;
    } catch (error) {
      console.error('MongoDB connection failed:');
      console.error('- Error:', error.message);
      
      if (this.connection.readyState === 0) {
        console.error('- Status: Not connected');
      } else if (this.connection.readyState === 1) {
        console.error('- Status: Connected but ping failed');
      } else {
        console.error('- Status: Connection state unknown');
      }
      
      throw error;
    }
  }
}