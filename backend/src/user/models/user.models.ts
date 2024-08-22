import { Column, DataType, Model, Table, HasOne } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Company } from 'src/employer/models/employer.models';
import { UserProfile } from './user-profile.model';
import { UserAttributes, UserTypeEnum } from './user.models.interface';
import { Exclude } from 'class-transformer';

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

@Table({ tableName: 'users' })
export class User extends Model<UserAttributes> implements UserAttributes {
  @ApiProperty({
    example: 1,
    description: 'Unique identifier for the user',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ApiProperty({
    example: 'John Doe',
    description: 'Full name of the user',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  fullName!: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'Email address of the user',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email!: string;

  @ApiProperty({
    example: 'P@ssw0rd',
    description: 'Password for the user account',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @Exclude()
  password!: string;

  @ApiProperty({
    example: UserTypeEnum.EMPLOYER,
    description: 'Type of the user account',
    enum: UserTypeEnum,
  })
  @Column({
    type: DataType.ENUM(...Object.values(UserTypeEnum)),
    allowNull: false,
  })
  userType!: UserTypeEnum;

  @HasOne(() => UserProfile)
  userProfile?: UserProfile;

  @HasOne(() => Company)
  company?: Company;

  @Column({
    type: DataType.ENUM(...Object.values(UserRole)),
    defaultValue: UserRole.USER,
    allowNull: false,
  })
  role!: UserRole;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  refreshToken?: string;
}
export { UserTypeEnum };
