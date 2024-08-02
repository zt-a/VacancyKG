import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'employments' })
export class Employment extends Model<Employment> {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the employment',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({
    example: 'Software Engineer',
    description: 'Name or title of the employment position',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
