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
import { FieldService } from './field.service';
import { CreateNameDto, UpdateNameDto } from './dto/name.dto';
import { Field } from './models/field.models';

@ApiTags('Fields')
@Controller('fields')
export class FieldController {
  constructor(private readonly fieldService: FieldService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all fields' })
  @ApiResponse({
    status: 200,
    description: 'List of all fields',
    type: [Field],
  })
  async findAllFields(): Promise<Field[]> {
    return this.fieldService.findAllFields();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a field by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the field to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'Details of the field',
    type: Field,
  })
  @ApiResponse({ status: 404, description: 'Field not found' })
  async findOneField(@Param('id') id: number): Promise<Field> {
    return this.fieldService.findOneField(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new field' })
  @ApiResponse({
    status: 201,
    description: 'Field created successfully',
    type: Field,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createField(@Body() createFieldDto: CreateNameDto): Promise<Field> {
    return this.fieldService.createField(createFieldDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a field by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the field to update',
  })
  @ApiResponse({
    status: 200,
    description: 'Field updated successfully',
    type: Field,
  })
  @ApiResponse({ status: 404, description: 'Field not found' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async updateField(
    @Param('id') id: number,
    @Body() updateFieldDto: UpdateNameDto,
  ): Promise<Field> {
    return this.fieldService.updateField(id, updateFieldDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a field by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the field to delete',
  })
  @ApiResponse({ status: 200, description: 'Field deleted successfully' })
  @ApiResponse({ status: 404, description: 'Field not found' })
  async deleteField(@Param('id') id: number): Promise<string> {
    await this.fieldService.deleteField(id);
    return `Deleted field ${id}`;
  }
}
