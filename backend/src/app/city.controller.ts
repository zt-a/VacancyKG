import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CityService } from './city.service';
import { City } from './models/city.models';
import { CreateNameDto, UpdateNameDto } from './dto/name.dto';

@ApiTags('Cities')
@Controller('cities')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all cities' })
  @ApiResponse({ status: 200, description: 'List of all cities', type: [City] })
  async findAllCities(): Promise<City[]> {
    return this.cityService.findAllCities();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a city by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the city to retrieve',
  })
  @ApiResponse({ status: 200, description: 'Details of the city', type: City })
  @ApiResponse({ status: 404, description: 'City not found' })
  async findOneCity(@Param('id') id: number): Promise<City> {
    return this.cityService.findOneCity(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new city' })
  @ApiResponse({
    status: 201,
    description: 'City created successfully',
    type: City,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createCity(@Body() createCityDto: CreateNameDto): Promise<City> {
    return this.cityService.createCity(createCityDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a city by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the city to update',
  })
  @ApiResponse({
    status: 200,
    description: 'City updated successfully',
    type: City,
  })
  @ApiResponse({ status: 404, description: 'City not found' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async updateCity(
    @Param('id') id: number,
    @Body() updateCityDto: UpdateNameDto,
  ): Promise<City> {
    return this.cityService.updateCity(id, updateCityDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a city by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the city to delete',
  })
  @ApiResponse({ status: 200, description: 'City deleted successfully' })
  @ApiResponse({ status: 404, description: 'City not found' })
  async deleteCity(@Param('id') id: number): Promise<string> {
    await this.cityService.deleteCity(id);
    return `Deleted city ${id}`;
  }
}
