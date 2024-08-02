import { IsString, IsEmail, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { UserTypeEnum } from '../models/user.models.interface';
import { UserRole } from '../models/user.models';

export class CreateUserDto {
  @ApiProperty({
    description: 'Full name of the user',
    example: 'John Doe',
  })
  @IsString()
  fullName: string;

  @ApiProperty({
    description: 'Email of the user',
    example: 'john.doe@example.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'Password for the user account',
    example: 'Password123!',
  })
  @IsString()
  password: string;

  @ApiProperty({
    description: 'Type of the user',
    enum: UserTypeEnum,
    example: UserTypeEnum.EMPLOYER,
  })
  @IsEnum(UserTypeEnum)
  userType: UserTypeEnum;

  @ApiProperty({
    description: 'Role of the user',
    enum: UserRole,
    example: UserRole.USER,
  })
  @IsEnum(UserRole)
  role?: UserRole;
}

export class UpdateUserDto {
  @ApiPropertyOptional({
    description: 'Full name of the user',
    example: 'John Doe',
  })
  @IsOptional()
  @IsString()
  fullName?: string;

  @ApiPropertyOptional({
    description: 'Email of the user',
    example: 'john.doe@example.com',
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({
    description: 'Password for the user account',
    example: 'Password123!',
  })
  @IsOptional()
  @IsString()
  password?: string;

  @ApiPropertyOptional({
    description: 'Type of the user',
    enum: UserTypeEnum,
    example: UserTypeEnum.JOBSEEKER,
  })
  @IsOptional()
  @IsEnum(UserTypeEnum)
  userType?: UserTypeEnum;

  @IsOptional()
  @IsEnum(UserRole)
  readonly role?: UserRole;
}
