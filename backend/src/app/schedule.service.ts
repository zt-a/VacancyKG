import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Schedule } from './models/schedule.models';
import { Repository } from 'sequelize-typescript';
import { CreateNameDto, UpdateNameDto } from './dto/name.dto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(Schedule)
    private readonly scheduleRepository: Repository<Schedule>,
  ) {}

  async findAllSchedules(): Promise<Schedule[]> {
    try {
      return await this.scheduleRepository.findAll();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve schedules');
    }
  }

  async findOneSchedule(id: number): Promise<Schedule> {
    try {
      const schedule = await this.scheduleRepository.findOne({ where: { id } });
      if (!schedule) {
        throw new NotFoundException(`Schedule with ID ${id} not found`);
      }
      return schedule;
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve schedule');
    }
  }

  async createSchedule(createScheduleDto: CreateNameDto): Promise<Schedule> {
    try {
      return await this.scheduleRepository.create(createScheduleDto);
    } catch (error) {
      throw new InternalServerErrorException('Failed to create schedule');
    }
  }

  async updateSchedule(
    id: number,
    updateScheduleDto: UpdateNameDto,
  ): Promise<Schedule> {
    try {
      const schedule = await this.scheduleRepository.findOne({ where: { id } });
      if (!schedule) {
        throw new NotFoundException(`Schedule with ID ${id} not found`);
      }
      return await schedule.update(updateScheduleDto);
    } catch (error) {
      throw new InternalServerErrorException('Failed to update schedule');
    }
  }

  async deleteSchedule(id: number): Promise<void> {
    try {
      const schedule = await this.scheduleRepository.findOne({ where: { id } });
      if (!schedule) {
        throw new NotFoundException(`Schedule with ID ${id} not found`);
      }
      await schedule.destroy();
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete schedule');
    }
  }
}
