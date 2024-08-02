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
import { Employment } from './models/employment.models';
import { CreateNameDto, UpdateNameDto } from './dto/name.dto';
import { EmploymentService } from './employment.service';

@ApiTags('Employments')
@Controller('employments')
export class EmploymentController {
  constructor(private readonly employmentService: EmploymentService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all employments' })
  @ApiResponse({
    status: 200,
    description: 'List of all employments',
    type: [Employment],
  })
  async findAllEmployments(): Promise<Employment[]> {
    return this.employmentService.findAllEmployments();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve an employment by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the employment to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'Details of the employment',
    type: Employment,
  })
  @ApiResponse({ status: 404, description: 'Employment not found' })
  async findOneEmployment(@Param('id') id: number): Promise<Employment> {
    return this.employmentService.findOneEmployment(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new employment' })
  @ApiResponse({
    status: 201,
    description: 'Employment created successfully',
    type: Employment,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createEmployment(
    @Body() createEmploymentDto: CreateNameDto,
  ): Promise<Employment> {
    return this.employmentService.createEmployment(createEmploymentDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an employment by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the employment to update',
  })
  @ApiResponse({
    status: 200,
    description: 'Employment updated successfully',
    type: Employment,
  })
  @ApiResponse({ status: 404, description: 'Employment not found' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async updateEmployment(
    @Param('id') id: number,
    @Body() updateEmploymentDto: UpdateNameDto,
  ): Promise<Employment> {
    return this.employmentService.updateEmployment(id, updateEmploymentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an employment by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the employment to delete',
  })
  @ApiResponse({ status: 200, description: 'Employment deleted successfully' })
  @ApiResponse({ status: 404, description: 'Employment not found' })
  async deleteEmployment(@Param('id') id: number): Promise<string> {
    await this.employmentService.deleteEmployment(id);
    return `Deleted employment ${id}`;
  }
}
