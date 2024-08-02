import { IsOptional, IsString, IsInt, IsDate } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserProfileDto {
  @ApiPropertyOptional({
    description: 'URL of the profile image',
    example: 'https://example.com/image.png',
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiPropertyOptional({
    description: 'Age of the user',
    example: 30,
  })
  @IsOptional()
  @IsInt()
  age?: number;

  @ApiPropertyOptional({
    description: 'Phone number of the user',
    example: '+1234567890',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    description: 'Address of the user',
    example: '456 Elm Street',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    description: 'Birthday of the user in ISO format',
    example: '1994-01-01T00:00:00Z',
  })
  @IsOptional()
  @IsDate()
  birthday?: Date; // Using string to ensure compatibility with various formats

  @ApiPropertyOptional({
    description: 'Description of the user',
    example: 'Software developer with 5 years of experience.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'WhatsApp contact of the user',
    example: '+1234567890',
  })
  @IsOptional()
  @IsString()
  whatsapp?: string;

  @ApiPropertyOptional({
    description: 'Telegram contact of the user',
    example: '@username',
  })
  @IsOptional()
  @IsString()
  telegram?: string;

  @ApiPropertyOptional({
    description: 'Instagram handle of the user',
    example: '@user',
  })
  @IsOptional()
  @IsString()
  instagram?: string;

  @ApiPropertyOptional({
    description: 'Facebook profile link of the user',
    example: 'https://facebook.com/user',
  })
  @IsOptional()
  @IsString()
  facebook?: string;

  @ApiPropertyOptional({
    description: 'LinkedIn profile link of the user',
    example: 'https://linkedin.com/in/user',
  })
  @IsOptional()
  @IsString()
  linkedIn?: string; // Corrected spelling from linkeden to linkedIn

  @ApiPropertyOptional({
    description: 'GitHub profile link of the user',
    example: 'https://github.com/user',
  })
  @IsOptional()
  @IsString()
  github?: string;

  @ApiPropertyOptional({
    description: 'Twitter handle of the user',
    example: '@user',
  })
  @IsOptional()
  @IsString()
  twitter?: string;

  @ApiPropertyOptional({
    description: 'VK profile link of the user',
    example: 'https://vk.com/user',
  })
  @IsOptional()
  @IsString()
  vk?: string;

  @ApiPropertyOptional({
    description: 'Contact information of the user',
    example: 'Available via email and phone.',
  })
  @IsOptional()
  @IsString()
  contact?: string;

  @ApiPropertyOptional({
    description: 'Website of the user',
    example: 'https://userwebsite.com',
  })
  @IsOptional()
  @IsString()
  website?: string;

  @ApiPropertyOptional({
    description: 'The user ID associated with the company',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  userId: number;
}

export class UpdateUserProfileDto {
  @ApiPropertyOptional({
    description: 'URL of the profile image',
    example: 'https://example.com/image.png',
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiPropertyOptional({
    description: 'Age of the user',
    example: 30,
  })
  @IsOptional()
  @IsInt()
  age?: number;

  @ApiPropertyOptional({
    description: 'Phone number of the user',
    example: '+1234567890',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    description: 'Address of the user',
    example: '456 Elm Street',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    description: 'Birthday of the user in ISO format',
    example: '1994-01-01T00:00:00Z',
  })
  @IsOptional()
  @IsDate()
  birthday?: Date; // Using string to ensure compatibility with various formats

  @ApiPropertyOptional({
    description: 'Description of the user',
    example: 'Software developer with 5 years of experience.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'WhatsApp contact of the user',
    example: '+1234567890',
  })
  @IsOptional()
  @IsString()
  whatsapp?: string;

  @ApiPropertyOptional({
    description: 'Telegram contact of the user',
    example: '@username',
  })
  @IsOptional()
  @IsString()
  telegram?: string;

  @ApiPropertyOptional({
    description: 'Instagram handle of the user',
    example: '@user',
  })
  @IsOptional()
  @IsString()
  instagram?: string;

  @ApiPropertyOptional({
    description: 'Facebook profile link of the user',
    example: 'https://facebook.com/user',
  })
  @IsOptional()
  @IsString()
  facebook?: string;

  @ApiPropertyOptional({
    description: 'LinkedIn profile link of the user',
    example: 'https://linkedin.com/in/user',
  })
  @IsOptional()
  @IsString()
  linkedIn?: string; // Corrected spelling from linkeden to linkedIn

  @ApiPropertyOptional({
    description: 'GitHub profile link of the user',
    example: 'https://github.com/user',
  })
  @IsOptional()
  @IsString()
  github?: string;

  @ApiPropertyOptional({
    description: 'Twitter handle of the user',
    example: '@user',
  })
  @IsOptional()
  @IsString()
  twitter?: string;

  @ApiPropertyOptional({
    description: 'VK profile link of the user',
    example: 'https://vk.com/user',
  })
  @IsOptional()
  @IsString()
  vk?: string;

  @ApiPropertyOptional({
    description: 'Contact information of the user',
    example: 'Available via email and phone.',
  })
  @IsOptional()
  @IsString()
  contact?: string;

  @ApiPropertyOptional({
    description: 'Website of the user',
    example: 'https://userwebsite.com',
  })
  @IsOptional()
  @IsString()
  website?: string;

  @ApiPropertyOptional({
    description: 'The user ID associated with the company',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  userId?: number;
}
