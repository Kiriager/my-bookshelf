import { Controller, Post, UseGuards, Body, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto';
import { RegistrationDto } from './dto/registrationDto.dto';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Post('restore')
  restore(@Request() req: any) {
    return this.authService.restore(req.user.email);
  }

  @Post('register')
  register(@Body() dto: RegistrationDto) {
    return this.authService.register(dto);
  }
}
