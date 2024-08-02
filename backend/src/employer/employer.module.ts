import { Module } from '@nestjs/common';
import { EmployerService } from './employer.service';
import { EmployerController } from './employer.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Company } from './models/employer.models';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [SequelizeModule.forFeature([Company]), FilesModule],
  providers: [EmployerService],
  controllers: [EmployerController],
})
export class EmployerModule {}
