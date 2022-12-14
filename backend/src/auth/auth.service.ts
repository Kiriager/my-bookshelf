import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findOneByEmail(email);

    if (user && this.userService.isPasswordEqualsHash(pass, user.passwordHash)) {
      const { passwordHash, ...result } = user;
      return result;
    }
    return null;
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
}
