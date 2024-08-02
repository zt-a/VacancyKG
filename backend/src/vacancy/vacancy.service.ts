import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Vacancy } from './models/vacancy.models';
import { Repository } from 'sequelize-typescript';
import { CreateVacancyDto, UpdateVacancyDto } from './dto/create-vacancy.dto';

@Injectable()
export class VacancyService {
  constructor(
    @InjectModel(Vacancy)
    private readonly vacancyRepository: Repository<Vacancy>,
  ) {}

  async findAllVacancy(): Promise<Vacancy[]> {
    return await this.vacancyRepository.findAll();
  }

  async findOneVacancy(id: number): Promise<Vacancy> {
    return await this.vacancyRepository.findOne({ where: { id } });
  }

  async createVacancy(createVacancyDto: CreateVacancyDto): Promise<Vacancy> {
    return await this.vacancyRepository.create(createVacancyDto);
  }

  async updateVacancy(
    id: number,
    updateVacancy: UpdateVacancyDto,
  ): Promise<Vacancy> {
    const vacancy = await this.vacancyRepository.findOne({ where: { id } });
    await vacancy.update(updateVacancy);
    return await vacancy;
  }

  async deleteVacancy(id: number): Promise<void> {
    const vacancy = await this.vacancyRepository.findOne({ where: { id } });
    await vacancy.destroy();
  }
}
