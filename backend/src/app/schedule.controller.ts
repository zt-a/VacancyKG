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
import { ScheduleService } from './schedule.service';
import { Schedule } from './models/schedule.models';
import { CreateNameDto, UpdateNameDto } from './dto/name.dto';

@ApiTags('Schedules')
@Controller('schedules')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve all schedules' })
  @ApiResponse({
    status: 200,
    description: 'List of all schedules',
    type: [Schedule],
  })
  async findAllSchedules(): Promise<Schedule[]> {
    return this.scheduleService.findAllSchedules();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a schedule by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the schedule to retrieve',
  })
  @ApiResponse({
    status: 200,
    description: 'Details of the schedule',
    type: Schedule,
  })
  @ApiResponse({ status: 404, description: 'Schedule not found' })
  async findOneSchedule(@Param('id') id: number): Promise<Schedule> {
    return this.scheduleService.findOneSchedule(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new schedule' })
  @ApiResponse({
    status: 201,
    description: 'Schedule created successfully',
    type: Schedule,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async createSchedule(
    @Body() createScheduleDto: CreateNameDto,
  ): Promise<Schedule> {
    return await this.scheduleService.createSchedule(createScheduleDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a schedule by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the schedule to update',
  })
  @ApiResponse({
    status: 200,
    description: 'Schedule updated successfully',
    type: Schedule,
  })
  @ApiResponse({ status: 404, description: 'Schedule not found' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async updateSchedule(
    @Param('id') id: number,
    @Body() updateScheduleDto: UpdateNameDto,
  ): Promise<Schedule> {
    return await this.scheduleService.updateSchedule(id, updateScheduleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a schedule by ID' })
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'ID of the schedule to delete',
  })
  @ApiResponse({ status: 200, description: 'Schedule deleted successfully' })
  @ApiResponse({ status: 404, description: 'Schedule not found' })
  async deleteSchedule(@Param('id') id: number): Promise<string> {
    await this.scheduleService.deleteSchedule(id);
    return `Deleted schedule ${id}`;
  }
}
