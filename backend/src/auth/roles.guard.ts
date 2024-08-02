import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles-auth.decorator';
import { UserRole } from '../user/models/user.models';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      // Получение требуемых ролей из декоратора
      const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(
        ROLES_KEY,
        [context.getHandler(), context.getClass()],
      );

      if (!requiredRoles || requiredRoles.length === 0) {
        return true; // Если роли не указаны, доступ разрешен
      }

      const request = context.switchToHttp().getRequest();
      const authHeader = request.headers.authorization;

      if (!authHeader) {
        throw new UnauthorizedException({ message: 'Токен не предоставлен' });
      }

      const [bearer, token] = authHeader.split(' ');

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({
          message: 'Некорректный формат токена',
        });
      }

      // Проверка и декодирование токена
      const user = this.jwtService.verify(token);
      request.user = user;

      // Проверка, содержит ли пользователь необходимые роли
      // Приведение role к массиву, если это не массив
      const roles = Array.isArray(user.role) ? user.role : [user.role];

      return roles.some((role: UserRole) => requiredRoles.includes(role));
    } catch (e) {
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
