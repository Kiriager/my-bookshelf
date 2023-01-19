import { Controller, Post, UseGuards, Body, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { RegistrationDto } from './dto/registrationDto.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { TokensPair } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegistrationDto): Promise<TokensPair> {
    return this.authService.register(dto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() dto: AuthDto): Promise<TokensPair> {
    return this.authService.login(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('refresh')
  refresh(@Request() req: any) {
    return this.authService.refresh(req.user.email);
  }

  @Post('logout')
  logout() {
    return this.authService.logout();
  }
}
