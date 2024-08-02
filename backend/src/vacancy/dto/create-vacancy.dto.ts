import { IsDate, IsOptional, IsString, IsInt } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateVacancyDto {
  @ApiProperty({
    description: 'Title of the vacancy',
    example: 'Software Engineer',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'Deadline for the vacancy application',
    example: '2024-12-31T23:59:59Z',
  })
  @IsDate()
  deadline: Date;

  @ApiProperty({
    description: 'Salary offered for the vacancy',
    example: '60000 USD',
  })
  @IsString()
  salary: string;

  @ApiProperty({
    description: 'Required experience for the vacancy',
    example: '3 years',
  })
  @IsString()
  experience: string;

  @ApiProperty({
    description: 'Address where the job is located',
    example: '123 Elm Street',
  })
  @IsString()
  address: string;

  @ApiProperty({
    description: 'Type of employment',
    example: 'Full-time',
  })
  @IsString()
  employment: string;

  @ApiProperty({
    description: 'Additional information about the vacancy',
    example: 'Flexible working hours and remote work options.',
  })
  @IsString()
  information: string;

  @ApiProperty({
    description: 'Details about the company or job role',
    example:
      'Join a dynamic team of developers working on cutting-edge technology.',
  })
  @IsString()
  about: string;

  @ApiPropertyOptional({
    description: 'Schedule ID for the job',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  scheduleId?: number;

  @ApiPropertyOptional({
    description: 'City ID where the job is located',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  cityId?: number;

  @ApiPropertyOptional({
    description: 'Company ID offering the job',
    example: 3,
  })
  @IsOptional()
  @IsInt()
  companyId?: number;
}

export class UpdateVacancyDto {
  @ApiPropertyOptional({
    description: 'Title of the vacancy',
    example: 'Software Engineer',
  })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({
    description: 'Deadline for the vacancy application',
    example: '2024-12-31T23:59:59Z',
  })
  @IsOptional()
  @IsDate()
  deadline?: Date;

  @ApiPropertyOptional({
    description: 'Salary offered for the vacancy',
    example: '60000 USD',
  })
  @IsOptional()
  @IsString()
  salary?: string;

  @ApiPropertyOptional({
    description: 'Required experience for the vacancy',
    example: '3 years',
  })
  @IsOptional()
  @IsString()
  experience?: string;

  @ApiPropertyOptional({
    description: 'Address where the job is located',
    example: '123 Elm Street',
  })
  @IsOptional()
  @IsString()
  address?: string;

  @ApiPropertyOptional({
    description: 'Type of employment',
    example: 'Full-time',
  })
  @IsOptional()
  @IsString()
  employment?: string;

  @ApiPropertyOptional({
    description: 'Additional information about the vacancy',
    example: 'Flexible working hours and remote work options.',
  })
  @IsOptional()
  @IsString()
  information?: string;

  @ApiPropertyOptional({
    description: 'Details about the company or job role',
    example:
      'Join a dynamic team of developers working on cutting-edge technology.',
  })
  @IsOptional()
  @IsString()
  about?: string;

  @ApiPropertyOptional({
    description: 'Schedule ID for the job',
    example: 1,
  })
  @IsOptional()
  @IsInt()
  scheduleId?: number;

  @ApiPropertyOptional({
    description: 'City ID where the job is located',
    example: 2,
  })
  @IsOptional()
  @IsInt()
  cityId?: number;

  @ApiPropertyOptional({
    description: 'Company ID offering the job',
    example: 3,
  })
  @IsOptional()
  @IsInt()
  companyId?: number;
}
