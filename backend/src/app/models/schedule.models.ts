import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'schedules' })
export class Schedule extends Model<Schedule> {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the schedule',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({
    example: 'Daily Standup',
    description: 'Name of the schedule',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
