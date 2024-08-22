import { ApiProperty } from '@nestjs/swagger';
import { UserRole, UserTypeEnum } from '../models/user.models';
import { IsEmail, IsEnum, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the user',
  })
  id: number;

  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user',
  })
  @IsString()
  fullName: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email address of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: UserTypeEnum.EMPLOYER,
    description: 'Type of the user account',
    enum: UserTypeEnum,
  })
  @IsEnum(UserTypeEnum)
  userType: UserTypeEnum;

  @ApiProperty({
    example: UserRole.USER,
    description: 'Role of the user',
    enum: UserRole,
  })
  @IsEnum(UserRole)
  role: UserRole;
}
