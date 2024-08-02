import { IsString, IsOptional, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({
    description: 'The name of the company',
    example: 'TechCorp',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The logo URL of the company',
    example: 'https://example.com/logo.png',
  })
  @IsString()
  logo: string;

  @ApiProperty({
    description: 'The address of the company',
    example: '123 Tech Street',
  })
  @IsString()
  address: string;

  @ApiProperty({
    description: 'The phone number of the company',
    example: '+1234567890',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'A brief description of the company',
    example: 'A leading tech company',
  })
  @IsString()
  description: string;

  @ApiPropertyOptional({
    description: 'The field ID associated with the company',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  fieldId?: number;

  @ApiPropertyOptional({
    description: 'The user ID associated with the company',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  userId: number;
}

export class UpdateCompanyDto {
  @ApiPropertyOptional({
    description: 'The name of the company',
    example: 'TechCorp',
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'The logo URL of the company',
    example: 'https://example.com/logo.png',
  })
  @IsOptional()
  @IsString()
  logo?: string;

  @ApiPropertyOptional({
    description: 'The address of the company',
    example: '123 Tech Street',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    description: 'The phone number of the company',
    example: '+1234567890',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    description: 'A brief description of the company',
    example: 'A leading tech company',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'The field ID associated with the company',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  fieldId?: number;

  @ApiPropertyOptional({
    description: 'The user ID associated with the company',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  userId: number;
}
