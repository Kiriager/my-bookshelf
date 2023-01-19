import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { jwtAccessSecret, jwtRefreshSecret } from 'config';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto';
import { RegistrationDto } from './dto/registrationDto.dto';
import { TakenEmailException } from './ecxeptions/taken-email.exception';
import { TokensPair } from './types';
import { TokenData } from './types/token-data.type copy';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findOneByEmail(email);
    if (user === null) {
      throw new UnauthorizedException({ statusCode: '401', error: 'unregistered email' });
    }
    const passwordMatches = await this.userService.isPasswordEqualsHash(pass, user.passwordHash);
    if (!passwordMatches) {
      throw new UnauthorizedException({ statusCode: '401', error: 'incorrect password' });
    }
    const { passwordHash, ...result } = user;
    return result;
  }

  async login(dto: AuthDto) {
    const user = await this.userService.findOneByEmail(dto.email);
    const tokens = await this.generateTokens({ email: dto.email, sub: user.id });
    await this.userService.updateRefreshTokenHash(user.id, tokens.refresh_token);
    return tokens;
  }

  async register(dto: RegistrationDto): Promise<TokensPair> {
    const candidate = await this.userService.findOneByEmail(dto.email);

    if (candidate === null) {
      const user = await this.userService.create(dto);
      const tokens = await this.generateTokens({ email: dto.email, sub: user.id });
      await this.userService.updateRefreshTokenHash(user.id, tokens.refresh_token);
      return tokens;
    } else {
      throw new TakenEmailException();
    }
  }

  async refresh(email: string) {
    const user = await this.userService.findOneByEmail(email);
    const payload = { username: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      email: user.email,
      id: user.id,
    };
  }

  async logout() {
    return;
  }

  private async generateTokens(payload: TokenData): Promise<TokensPair> {
    const accessToken = this.jwtService.sign(payload, {
      secret: jwtAccessSecret,
      expiresIn: '30s',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: jwtRefreshSecret,
      expiresIn: '90s',
    });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }
}
