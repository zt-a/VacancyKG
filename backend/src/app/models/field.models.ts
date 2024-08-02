import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table({ tableName: 'fields' })
export class Field extends Model<Field> {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the field',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({
    example: 'Information Technology',
    description: 'Name of the field or sector',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
}
