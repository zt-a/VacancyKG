import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'cities' })
export class City extends Model<City> {
  @ApiProperty({ example: 1, description: 'Unique identifier for the city' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({ example: 'New York', description: 'Name of the city' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
