import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { Resume } from './models/resume.models';
import { SequelizeModule } from '@nestjs/sequelize';
import { FilesModule } from 'src/files/files.module';

@Module({
  imports: [SequelizeModule.forFeature([Resume]), FilesModule],
  controllers: [ResumeController],
  providers: [ResumeService],
})
export class ResumeModule {}
