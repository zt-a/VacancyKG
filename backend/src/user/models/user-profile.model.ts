import { ApiProperty } from '@nestjs/swagger';
import {
  Model,
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { UserProfileAttributes } from './user.models.interface';
import { User } from './user.models';

@Table({ tableName: 'user_profiles' })
export class UserProfile
  extends Model<UserProfileAttributes>
  implements UserProfileAttributes
{
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the user profile',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({
    example: 'https://example.com/profile-image.png',
    description: 'Profile image URL',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  image?: string;

  @ApiProperty({
    example: 30,
    description: 'Age of the user',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  age?: number;

  @ApiProperty({
    example: '+1 (555) 123-4567',
    description: 'Phone number of the user',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone?: string;

  @ApiProperty({
    example: '123 Main Street, Hometown',
    description: 'Address of the user',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address?: string;

  @ApiProperty({
    example: '1985-06-15',
    description: 'Birthday of the user',
  })
  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  birthday?: Date;

  @ApiProperty({
    example: 'Software developer with 10 years of experience',
    description: 'Description of the user profile',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description?: string;

  @ApiProperty({
    example: '+1 (555) 987-6543',
    description: 'WhatsApp contact number',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  whatsapp?: string;

  @ApiProperty({
    example: '@username',
    description: 'Telegram username',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  telegram?: string;

  @ApiProperty({
    example: '@instagramhandle',
    description: 'Instagram handle',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  instagram?: string;

  @ApiProperty({
    example: '@facebookhandle',
    description: 'Facebook handle',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  facebook?: string;

  @ApiProperty({
    example: '@linkedinhandle',
    description: 'LinkedIn handle',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  linkeden?: string;

  @ApiProperty({
    example: '@githubhandle',
    description: 'GitHub handle',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  github?: string;

  @ApiProperty({
    example: '@twitterhandle',
    description: 'Twitter handle',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  twitter?: string;

  @ApiProperty({
    example: '@vkhandle',
    description: 'VK handle',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  vk?: string;

  @ApiProperty({
    example: 'Contact us at example@example.com',
    description: 'Contact information',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  contact?: string;

  @ApiProperty({
    example: 'https://userwebsite.com',
    description: 'Personal or professional website URL',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  website?: string;

  @ApiProperty({
    example: 1,
    description: 'Foreign key referencing the user profile',
    required: false,
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
