import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VacancyService } from './vacancy.service';
import { Vacancy } from './models/vacancy.models';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateVacancyDto, UpdateVacancyDto } from './dto/create-vacancy.dto';

@ApiTags('Vacancies')
@Controller('vacancies')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get()
  @ApiOperation({ summary: 'Get all vacancies' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved all vacancies.',
    type: [Vacancy],
  })
  async findAllVacancy(): Promise<Vacancy[]> {
    return this.vacancyService.findAllVacancy();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vacancy by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved the vacancy.',
    type: Vacancy,
  })
  @ApiResponse({ status: 404, description: 'Vacancy not found.' })
  async findOneVacancy(@Param('id') id: number): Promise<Vacancy> {
    return this.vacancyService.findOneVacancy(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new vacancy' })
  @ApiResponse({
    status: 201,
    description: 'Successfully created the vacancy.',
    type: Vacancy,
  })
  async createVacancy(
    @Body() createVacancyDto: CreateVacancyDto,
  ): Promise<Vacancy> {
    return this.vacancyService.createVacancy(createVacancyDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing vacancy' })
  @ApiResponse({
    status: 200,
    description: 'Successfully updated the vacancy.',
    type: Vacancy,
  })
  @ApiResponse({ status: 404, description: 'Vacancy not found.' })
  async updateVacancy(
    @Param('id') id: number,
    @Body() updateVacancyDto: UpdateVacancyDto,
  ): Promise<Vacancy> {
    return this.vacancyService.updateVacancy(id, updateVacancyDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a vacancy by ID' })
  @ApiResponse({
    status: 200,
    description: 'Successfully deleted the vacancy.',
  })
  @ApiResponse({ status: 404, description: 'Vacancy not found.' })
  async deleteVacancy(@Param('id') id: number): Promise<string> {
    await this.vacancyService.deleteVacancy(id);
    return `Deleted vacancy ${id}`;
  }
}
