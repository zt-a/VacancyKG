import {
  Column,
  DataType,
  Model,
  ForeignKey,
  BelongsTo,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { VacancyAttributes } from './vacancy.interface.models';
import { Company } from 'src/employer/models/employer.models';
import { Schedule } from 'src/app/models/schedule.models';
import { City } from 'src/app/models/city.models';

@Table({ tableName: 'vacancies' })
export class Vacancy
  extends Model<VacancyAttributes>
  implements VacancyAttributes
{
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the vacancy',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({
    example: 'Software Developer',
    description: 'Title of the vacancy',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @ApiProperty({
    example: '2024-12-31T23:59:59.999Z',
    description: 'Deadline for applying to the vacancy',
    type: String, // Use type: String to match ISO date format
  })
  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  deadline!: Date;

  @ApiProperty({
    example: '50000',
    description: 'Salary offered for the vacancy',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  salary!: string;

  @ApiProperty({
    example: '2 years of experience required',
    description: 'Experience required for the vacancy',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  experience?: string;

  @ApiProperty({
    example: '123 Main St, Anytown',
    description: 'Address where the job is located',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  address?: string;

  @ApiProperty({
    example: 'Full-time position',
    description: 'Type of employment for the vacancy',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  employment!: string;

  @ApiProperty({
    example: 'Additional information about the vacancy',
    description: 'Additional information about the vacancy',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  information?: string;

  @ApiProperty({
    example: 'Company is looking for a dedicated developer',
    description: 'Description about the company or the role',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  about?: string;

  @ApiProperty({
    example: 1,
    description: 'Foreign key referencing the schedule',
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
    description: 'Foreign key referencing the city',
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
    description: 'Foreign key referencing the company',
  })
  @ForeignKey(() => Company)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  companyId!: number;

  @BelongsTo(() => Company)
  company!: Company;
}
