import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtAccessSecret } from 'config';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { AccessTokenStrategy, RefreshTokenStrategy } from './strategies';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  providers: [AuthService, LocalStrategy, AccessTokenStrategy, RefreshTokenStrategy],
  imports: [UserModule, PassportModule, JwtModule.register({})],
  controllers: [AuthController],
})
export class AuthModule {}
