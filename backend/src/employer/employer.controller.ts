import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { EmployerService } from './employer.service';
import { Company } from './models/employer.models';
import { CreateCompanyDto, UpdateCompanyDto } from './dto/create-company.dto';

@ApiTags('Companies')
@Controller('companies')
export class EmployerController {
  constructor(private readonly employerService: EmployerService) {}

  @Get()
  @ApiOperation({ summary: 'Get all companies' })
  @ApiResponse({
    status: 200,
    description: 'Return all companies.',
    type: [Company],
  })
  async findAllCompanies(): Promise<Company[]> {
    return await this.employerService.findAllCompanies();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a company by ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the company to retrieve',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'Return a company by ID.',
    type: Company,
  })
  @ApiResponse({ status: 404, description: 'Company not found' })
  async findOneCompany(@Param('id') id: number): Promise<Company> {
    return await this.employerService.findOneCompany(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new company' })
  @ApiResponse({
    status: 201,
    description: 'The company has been successfully created.',
    type: Company,
  })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  async createCompany(
    @Body() createCompanyDto: CreateCompanyDto,
    @UploadedFile() logo: any,
  ): Promise<Company> {
    return await this.employerService.createCompany(createCompanyDto, logo);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing company' })
  @ApiParam({
    name: 'id',
    description: 'ID of the company to update',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The company has been successfully updated.',
    type: Company,
  })
  @ApiResponse({ status: 404, description: 'Company not found' })
  @ApiResponse({ status: 400, description: 'Invalid input' })
  async updateCompany(
    @Param('id') id: number,
    @Body() updateCompanyDto: UpdateCompanyDto,
    @UploadedFile() logo: any,
  ): Promise<Company> {
    return await this.employerService.updateCompany(id, updateCompanyDto, logo);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a company by ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the company to delete',
    type: Number,
  })
  @ApiResponse({
    status: 200,
    description: 'The company has been successfully deleted.',
  })
  @ApiResponse({ status: 404, description: 'Company not found' })
  async deleteCompany(@Param('id') id: number): Promise<string> {
    await this.employerService.deleteCompany(id);
    return `Deleted company ${id}`;
  }
}
