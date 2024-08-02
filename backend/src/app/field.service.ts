import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Field } from './models/field.models';
import { Repository } from 'sequelize-typescript';
import { CreateNameDto, UpdateNameDto } from './dto/name.dto';

@Injectable()
export class FieldService {
  constructor(
    @InjectModel(Field)
    private readonly fieldRepository: Repository<Field>,
  ) {}

  async findAllFields(): Promise<Field[]> {
    return this.fieldRepository.findAll();
  }

  async findOneField(id: number): Promise<Field> {
    const field = await this.fieldRepository.findByPk(id);
    if (!field) {
      throw new NotFoundException(`Field with ID ${id} not found`);
    }
    return field;
  }

  async createField(createFieldDto: CreateNameDto): Promise<Field> {
    return this.fieldRepository.create(createFieldDto);
  }

  async updateField(id: number, updateFieldDto: UpdateNameDto): Promise<Field> {
    const field = await this.fieldRepository.findByPk(id);
    if (!field) {
      throw new NotFoundException(`Field with ID ${id} not found`);
    }
    return field.update(updateFieldDto);
  }

  async deleteField(id: number): Promise<void> {
    const field = await this.fieldRepository.findByPk(id);
    if (!field) {
      throw new NotFoundException(`Field with ID ${id} not found`);
    }
    await field.destroy();
  }
}
