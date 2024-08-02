import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { City } from './models/city.models';
import { Repository } from 'sequelize-typescript';
import { CreateNameDto, UpdateNameDto } from './dto/name.dto';

@Injectable()
export class CityService {
  constructor(
    @InjectModel(City)
    private readonly cityRepository: Repository<City>,
  ) {}

  async findAllCities(): Promise<City[]> {
    return this.cityRepository.findAll();
  }

  async findOneCity(id: number): Promise<City> {
    const city = await this.cityRepository.findByPk(id);
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    return city;
  }

  async createCity(createCityDto: CreateNameDto): Promise<City> {
    return this.cityRepository.create(createCityDto as any); // Приведение типа, если необходимо
  }

  async updateCity(id: number, updateCityDto: UpdateNameDto): Promise<City> {
    const city = await this.cityRepository.findByPk(id);
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    await city.update(updateCityDto as any); // Приведение типа, если необходимо
    return city;
  }

  async deleteCity(id: number): Promise<void> {
    const city = await this.cityRepository.findByPk(id);
    if (!city) {
      throw new NotFoundException(`City with ID ${id} not found`);
    }
    await city.destroy();
  }
}
