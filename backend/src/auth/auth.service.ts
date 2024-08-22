import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './dto/login.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { User } from 'src/user/models/user.models';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userService.getUserByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async login(loginDto: LoginDto, res: any): Promise<any> {
    const { email, password } = loginDto;

    const user = await this.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      email: user.email,
      sub: user.id,
      name: user.fullName,
      userType: user.userType,
      role: user.role,
    };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    // Store refreshToken in the database
    user.refreshToken = refreshToken;
    await user.save();

    // Store refreshToken in a cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: true, // Set to true in production
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return { accessToken, refreshToken, payload };
  }

  async refreshToken(refreshTokenDto: RefreshTokenDto, res: any): Promise<any> {
    const { refreshToken } = refreshTokenDto;
    try {
      const decoded = this.jwtService.verify(refreshToken);
      const user = await this.userService.getUserByEmail(decoded.email);
      if (!(await this.compareRefreshToken(user, refreshToken))) {
        throw new UnauthorizedException('Invalid refresh token');
      }
      const payload = { email: user.email, sub: user.id };
      const newAccessToken = this.jwtService.sign(payload, {
        expiresIn: '15m',
      });
      const newRefreshToken = this.jwtService.sign(payload, {
        expiresIn: '7d',
      });
      await this.saveRefreshToken(user, newRefreshToken);
      res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: true,
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });
      return { accessToken: newAccessToken };
    } catch (error) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  async saveRefreshToken(user: User, refreshToken: string): Promise<void> {
    const hashedToken = await bcrypt.hash(refreshToken, 10);
    user.refreshToken = hashedToken;
    await user.save();
  }

  async compareRefreshToken(
    user: User,
    refreshToken: string,
  ): Promise<boolean> {
    return await bcrypt.compare(refreshToken, user.refreshToken);
  }

  async logout(user: User, res: any): Promise<void> {
    user.refreshToken = null;
    await user.save();
    res.clearCookie('refreshToken');
  }

  async register(registerDto: RegisterDto): Promise<any> {
    const { fullName, email, password, userType } = registerDto;

    const existingUser = await this.userService.getUserByEmail(email);
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await this.userService.createUser({
      fullName,
      email,
      password: hashedPassword,
      userType,
    });

    const payload = {
      email: newUser.email,
      sub: newUser.id,
      name: newUser.fullName,
      userType: newUser.userType,
      role: newUser.role,
    };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    await this.saveRefreshToken(newUser, refreshToken);

    return {
      accessToken,
      refreshToken,
      payload,
    };
  }
}
