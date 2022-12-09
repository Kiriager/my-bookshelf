import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { development } from 'config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/entities';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      ...development,
      autoLoadModels: true,
      models: [User],
    }),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
