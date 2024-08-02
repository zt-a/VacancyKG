import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Resume } from './models/resume.models';
import { Repository } from 'sequelize-typescript';
import { CreateResumeDto, UpdateResumeDto } from './dto/create-resume.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class ResumeService {
  constructor(
    @InjectModel(Resume)
    private readonly resumeRepository: Repository<Resume>,
    private readonly fileService: FilesService,
  ) {}

  async findAllResume(): Promise<Resume[]> {
    return this.resumeRepository.findAll();
  }

  async findOneResume(id: number): Promise<Resume> {
    const resume = await this.resumeRepository.findOne({ where: { id } });
    if (!resume) {
      throw new NotFoundException(`Resume with ID ${id} not found`);
    }
    return resume;
  }

  async createResume(
    createResumeDto: CreateResumeDto,
    image: any,
  ): Promise<Resume> {
    const fileName = await this.fileService.createFile(image);
    const resume = this.resumeRepository.create({
      ...createResumeDto,
      image: fileName,
    });
    return resume;
  }

  async updateResume(
    id: number,
    updateResumeDto: UpdateResumeDto,
    image: any,
  ): Promise<Resume> {
    const resume = await this.resumeRepository.findOne({ where: { id } });
    if (!resume) {
      throw new NotFoundException(`Resume with ID ${id} not found`);
    }
    const fileName = await this.fileService.createFile(image);
    return resume.update({ ...updateResumeDto, image: fileName });
  }

  async deleteResume(id: number): Promise<void> {
    const resume = await this.resumeRepository.findOne({ where: { id } });
    if (!resume) {
      throw new NotFoundException(`Resume with ID ${id} not found`);
    }
    await resume.destroy();
  }
}
