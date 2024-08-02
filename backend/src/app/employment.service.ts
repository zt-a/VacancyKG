import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Employment } from './models/employment.models';
import { Repository } from 'sequelize-typescript';
import { CreateNameDto, UpdateNameDto } from './dto/name.dto';

@Injectable()
export class EmploymentService {
  constructor(
    @InjectModel(Employment)
    private readonly employmentRepository: Repository<Employment>,
  ) {}

  async findAllEmployments(): Promise<Employment[]> {
    return this.employmentRepository.findAll();
  }

  async findOneEmployment(id: number): Promise<Employment> {
    const employment = await this.employmentRepository.findByPk(id);
    if (!employment) {
      throw new NotFoundException(`Employment with ID ${id} not found`);
    }
    return employment;
  }

  async createEmployment(
    createEmploymentDto: CreateNameDto,
  ): Promise<Employment> {
    return this.employmentRepository.create(createEmploymentDto as any); // Приведение типа, если необходимо
  }

  async updateEmployment(
    id: number,
    updateEmploymentDto: UpdateNameDto,
  ): Promise<Employment> {
    const employment = await this.employmentRepository.findByPk(id);
    if (!employment) {
      throw new NotFoundException(`Employment with ID ${id} not found`);
    }
    await employment.update(updateEmploymentDto as any); // Приведение типа, если необходимо
    return employment;
  }

  async deleteEmployment(id: number): Promise<void> {
    const employment = await this.employmentRepository.findByPk(id);
    if (!employment) {
      throw new NotFoundException(`Employment with ID ${id} not found`);
    }
    await employment.destroy(); // Исправлено: вызов функции destroy
  }
}
