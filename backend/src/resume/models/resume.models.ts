import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ResumeAttributes } from './resume.interface.models';
import { User } from 'src/user/models/user.models';
import { Schedule } from 'src/app/models/schedule.models';
import { City } from 'src/app/models/city.models';
import { Field } from 'src/app/models/field.models';

@Table({ tableName: 'resumes' })
export class Resume
  extends Model<ResumeAttributes>
  implements ResumeAttributes
{
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the resume',
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
  })
  id!: number;

  @ApiProperty({
    example: 'Software Engineer',
    description: 'Title of the resume',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @ApiProperty({
    example: 'https://example.com/resume-image.png',
    description: 'Image URL associated with the resume',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  image!: string;

  @ApiProperty({
    example: '50000',
    description: 'Expected salary mentioned in the resume',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  salary!: string;

  @ApiProperty({
    example: '123 Main Street, Hometown',
    description: 'Address mentioned in the resume',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address!: string;

  @ApiProperty({
    example: '+1 (555) 123-4567',
    description: 'Phone number mentioned in the resume',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone!: string;

  @ApiProperty({
    example: '5 years of experience in software development',
    description: 'Experience details mentioned in the resume',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  experience!: string;

  @ApiProperty({
    example: 'Experienced in full-stack development using modern technologies.',
    description: 'Description of the resume',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description!: string;

  @ApiProperty({
    example: 'Available for immediate start',
    description: 'Additional information provided in the resume',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  information!: string;

  @ApiProperty({
    example: 1,
    description: 'User ID associated with the resume',
  })
  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @BelongsTo(() => User)
  user!: User;

  @ApiProperty({
    example: 1,
    description: 'Schedule ID associated with the resume',
  })
  @ForeignKey(() => Schedule)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  scheduleId!: number;

  @BelongsTo(() => Schedule)
  schedule!: Schedule;

  @ApiProperty({
    example: 1,
    description: 'City ID associated with the resume',
  })
  @ForeignKey(() => City)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  cityId!: number;

  @BelongsTo(() => City)
  city!: City;

  @ApiProperty({
    example: 1,
    description: 'Field ID associated with the resume',
  })
  @ForeignKey(() => Field)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  fieldId!: number;

  @BelongsTo(() => Field)
  field!: Field;
}
