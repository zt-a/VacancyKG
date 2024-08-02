import { IsString, IsOptional, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateResumeDto {
  @ApiProperty({
    description: 'Title of the resume',
    example: 'Software Engineer',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'URL of the resume image',
    example: 'https://example.com/image.png',
  })
  @IsString()
  image: string;

  @ApiProperty({
    description: 'Salary expectation',
    example: '50000 USD',
  })
  @IsString()
  salary: string;

  @ApiProperty({
    description: 'Address of the applicant',
    example: '123 Main Street, Springfield',
  })
  @IsString()
  address: string;

  @ApiProperty({
    description: 'Phone number of the applicant',
    example: '+1234567890',
  })
  @IsString()
  phone: string;

  @ApiProperty({
    description: 'Years of experience',
    example: '5 years',
  })
  @IsString()
  experience: string;

  @ApiProperty({
    description: 'Description of the resume',
    example:
      'Experienced software engineer with a background in full-stack development.',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Additional information',
    example: 'Available for remote work',
  })
  @IsString()
  information: string;

  @ApiPropertyOptional({
    description: 'Schedule ID',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  scheduleId?: number;

  @ApiPropertyOptional({
    description: 'City ID',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  cityId?: number;

  @ApiPropertyOptional({
    description: 'User ID',
    example: 3,
  })
  @IsOptional()
  @IsInt()
  userId?: number;

  @ApiPropertyOptional({
    description: 'Field ID',
    example: 4,
  })
  @IsOptional()
  @IsInt()
  fieldId?: number;
}

export class UpdateResumeDto {
  @ApiPropertyOptional({
    description: 'Title of the resume',
    example: 'Software Engineer',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'URL of the resume image',
    example: 'https://example.com/image.png',
  })
  @IsOptional()
  @IsString()
  image?: string;

  @ApiPropertyOptional({
    description: 'Salary expectation',
    example: '50000 USD',
  })
  @IsOptional()
  @IsString()
  salary?: string;

  @ApiPropertyOptional({
    description: 'Address of the applicant',
    example: '123 Main Street, Springfield',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    description: 'Phone number of the applicant',
    example: '+1234567890',
  })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiPropertyOptional({
    description: 'Years of experience',
    example: '5 years',
  })
  @IsOptional()
  @IsString()
  experience?: string;

  @ApiPropertyOptional({
    description: 'Description of the resume',
    example:
      'Experienced software engineer with a background in full-stack development.',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Additional information',
    example: 'Available for remote work',
  })
  @IsOptional()
  @IsString()
  information?: string;

  @ApiPropertyOptional({
    description: 'Schedule ID',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  scheduleId?: number;

  @ApiPropertyOptional({
    description: 'City ID',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  cityId?: number;

  @ApiPropertyOptional({
    description: 'User ID',
    example: 3,
  })
  @IsOptional()
  @IsInt()
  userId?: number;

  @ApiPropertyOptional({
    description: 'Field ID',
    example: 4,
  })
  @IsOptional()
  @IsInt()
  fieldId?: number;
}
