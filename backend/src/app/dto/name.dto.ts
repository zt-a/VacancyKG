import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateNameDto {
  @ApiProperty({
    description: 'The name of the entity',
    example: 'John Doe',
  })
  @IsString()
  name: string;
}

export class UpdateNameDto {
  @ApiPropertyOptional({
    description: 'The name of the entity',
    example: 'John Doe',
  })
  @IsOptional()
  @IsString()
  name?: string;
}
