import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto';
import { RegistrationDto } from './dto/registrationDto.dto';
import { TakenEmailException } from './ecxeptions/taken-email.exception';

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

  async login(dto: LoginDto) {
    const user = await this.userService.findOneByEmail(dto.email);
    const payload = { username: dto.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      email: user.email,
      id: user.id,
    };
  }

  async register(dto: RegistrationDto) {
    const candidate = await this.userService.findOneByEmail(dto.email);
    if (candidate === null) {
      const user = await this.userService.create(dto);
      const payload = { username: dto.email, sub: user.id };
      return {
        accessToken: this.jwtService.sign(payload),
        email: user.email,
        id: user.id,
      };
    } else {
      throw new TakenEmailException();
    }
  }

  async restore(email: string) {
    const user = await this.userService.findOneByEmail(email);
    const payload = { username: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      email: user.email,
      id: user.id,
    };
  }
}
