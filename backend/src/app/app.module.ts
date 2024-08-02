import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { User } from 'src/user/models/user.models';
import { Company } from 'src/employer/models/employer.models';
import { Resume } from 'src/resume/models/resume.models';
import { Vacancy } from 'src/vacancy/models/vacancy.models';
import { UserModule } from 'src/user/user.module';
import { ResumeModule } from 'src/resume/resume.module';
import { VacancyModule } from 'src/vacancy/vacancy.module';
import { EmployerModule } from 'src/employer/employer.module';
import { UserProfile } from 'src/user/models/user-profile.model';
import { Schedule } from './models/schedule.models';
import { Employment } from './models/employment.models';
import { City } from './models/city.models';
import { Field } from './models/field.models';
import { CityController } from './city.controller';
import { EmploymentController } from './employment.controller';
import { ScheduleController } from './schedule.controller';
import { FieldController } from './field.controller';
import { CityService } from './city.service';
import { EmploymentService } from './employment.service';
import { ScheduleService } from './schedule.service';
import { FieldService } from './field.service';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER,
      password: String(process.env.DB_PASSWORD),
      database: process.env.DB_NAME,
      autoLoadModels: true,
      synchronize: true,
      models: [
        User,
        UserProfile,
        Company,
        Resume,
        Vacancy,
        Schedule,
        Employment,
        City,
        Field,
      ],
    }),
    SequelizeModule.forFeature([
      User,
      UserProfile,
      Company,
      Resume,
      Vacancy,
      Schedule,
      Employment,
      City,
      Field,
    ]),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, '..', '..', 'static'),
    }),
    AuthModule,
    UserModule,
    ResumeModule,
    VacancyModule,
    EmployerModule,
  ],
  controllers: [
    AppController,
    CityController,
    EmploymentController,
    ScheduleController,
    FieldController,
  ],
  providers: [
    AppService,
    CityService,
    EmploymentService,
    ScheduleService,
    FieldService,
  ],
})
export class AppModule {}
