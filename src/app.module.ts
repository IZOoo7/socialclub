import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiquorModule } from './liquor/liquor.module';
import { envs } from './config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [LiquorModule, ConfigModule.forRoot(),TypeOrmModule.forRoot({
    type:'postgres',
    host:envs.db_host,
    port: envs.db_port,
    username : envs.db_user,
    password : envs.db_password,
    database : envs.db_name,
    autoLoadEntities: true,
    synchronize: true,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
