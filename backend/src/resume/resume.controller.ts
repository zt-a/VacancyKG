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
import { ResumeService } from './resume.service';
import { Resume } from './models/resume.models';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { CreateResumeDto, UpdateResumeDto } from './dto/create-resume.dto';

@ApiTags('Resumes')
@Controller('resumes')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all resumes' })
  @ApiResponse({
    status: 200,
    description: 'Return all resumes.',
    type: [Resume],
  })
  async findAllResume(): Promise<Resume[]> {
    return await this.resumeService.findAllResume();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a resume by ID' })
  @ApiParam({
    name: 'id',
    type: 'string',
    description: 'ID of the resume to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'Return the resume with the specified ID.',
    type: Resume,
  })
  @ApiResponse({ status: 404, description: 'Resume not found' })
  async findOneResume(@Param('id') id: string): Promise<Resume> {
    return await this.resumeService.findOneResume(+id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new resume' })
  @ApiBody({ description: 'Resume data to create', type: CreateResumeDto })
  @ApiResponse({
    status: 201,
    description: 'Resume successfully created.',
    type: Resume,
  })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async createResume(
    @Body() createResumeDto: CreateResumeDto,
    @UploadedFile() image: any,
  ): Promise<Resume> {
    return this.resumeService.createResume(createResumeDto, image);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing resume' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of the resume to update',
  })
  @ApiBody({ description: 'Resume data to update', type: UpdateResumeDto })
  @ApiResponse({
    status: 200,
    description: 'Resume successfully updated.',
    type: Resume,
  })
  @ApiResponse({ status: 404, description: 'Resume not found' })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  async updateResume(
    @Param('id') id: number,
    @Body() updateResumeDto: UpdateResumeDto,
    @UploadedFile() image: any,
  ): Promise<Resume> {
    return this.resumeService.updateResume(id, updateResumeDto, image);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a resume' })
  @ApiParam({
    name: 'id',
    type: 'number',
    description: 'ID of the resume to delete',
  })
  @ApiResponse({ status: 200, description: 'Resume successfully deleted' })
  @ApiResponse({ status: 404, description: 'Resume not found' })
  async deleteResume(@Param('id') id: number): Promise<string> {
    await this.resumeService.deleteResume(id);
    return 'Deleted resume ' + id;
  }
}
