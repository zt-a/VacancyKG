import { Controller, Post, Body, Res, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { RegisterDto } from './dto/register.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  userService: any;
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res: any): Promise<any> {
    try {
      const result = await this.authService.login(loginDto, res);
      return res.json(result);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }

  @Post('refresh')
  async refreshToken(
    @Body() refreshTokenDto: RefreshTokenDto,
    @Res() res: any,
  ): Promise<any> {
    try {
      const result = await this.authService.refreshToken(refreshTokenDto, res);
      return res.json(result);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }

  @Post('logout')
  async logout(@Req() req: any, @Res() res: any): Promise<any> {
    try {
      const user = await this.userService.findById(req.user.id);
      await this.authService.logout(user, res);
      return res.status(200).json({ message: 'Logged out successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Error logging out' });
    }
  }

  @Post('register')
  async register(
    @Body() registerDto: RegisterDto,
    @Res() res: any,
  ): Promise<any> {
    try {
      const tokens = await this.authService.register(registerDto);
      res.cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(201).json({ accessToken: tokens.accessToken });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}
