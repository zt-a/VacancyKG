import { ApiProperty } from '@nestjs/swagger';
import {
  Table,
  Column,
  Model,
  ForeignKey,
  DataType,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { Field } from 'src/app/models/field.models';
import { User } from 'src/user/models/user.models';
import { Vacancy } from 'src/vacancy/models/vacancy.models';

@Table({ tableName: 'companies' })
export class Company extends Model<Company> {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the company',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({
    example: 'Tech Innovations Inc.',
    description: 'Name of the company',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @ApiProperty({
    example: 'https://example.com/logo.png',
    description: 'Logo URL of the company',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  logo?: string;

  @ApiProperty({
    example: '123 Tech Street, Silicon Valley, CA',
    description: 'Address of the company',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address?: string;

  @ApiProperty({
    example: '+1 (123) 456-7890',
    description: 'Phone number of the company',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  phone?: string;

  @ApiProperty({
    example: 'Leading tech company specializing in innovative solutions.',
    description: 'Description of the company',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description?: string;

  @ApiProperty({
    example: 2,
    description: 'Field ID associated with the company',
  })
  @ForeignKey(() => Field)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fieldId!: number;

  @BelongsTo(() => Field)
  field!: Field;

  @ApiProperty({
    type: () => [Vacancy],
    description: 'List of vacancies associated with the company',
  })
  @HasMany(() => Vacancy)
  vacancies!: Vacancy[];

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;
}
