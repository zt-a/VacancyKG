import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './models/user.models';
import { UserProfile } from './models/user-profile.model';
import { InjectModel } from '@nestjs/sequelize';
import { Repository } from 'sequelize-typescript';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import {
  CreateUserProfileDto,
  UpdateUserProfileDto,
} from './dto/create-user-profile.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private readonly userRepository: Repository<User>,
    @InjectModel(UserProfile)
    private readonly userProfileRepository: Repository<UserProfile>,
    private readonly fileService: FilesService,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findAllProfiles(): Promise<UserProfile[]> {
    return this.userProfileRepository.findAll();
  }

  // ---------------------------------------- //

  async findOneUser(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  async findOneProfile(id: number): Promise<UserProfile> {
    const userProfile = await this.userProfileRepository.findOne({
      where: { id },
    });
    if (!userProfile) {
      throw new NotFoundException(`UserProfile with ID ${id} not found`);
    }
    return userProfile;
  }

  // ---------------------------------------- //

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.create(createUserDto);
  }

  async createUserProfile(
    createUserProfileDto: CreateUserProfileDto,
    image?: any,
  ): Promise<UserProfile> {
    let fileName = null;

    if (image) {
      fileName = await this.fileService.createFile(image);
    }

    return await this.userProfileRepository.create({
      ...createUserProfileDto,
      image: fileName,
    });
  }

  // ---------------------------------------- //

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOneUser(id); // Reuse findOneUser method
    return user.update(updateUserDto);
  }

  async updateUserProfile(
    id: number,
    updateUserProfileDto: UpdateUserProfileDto,
  ): Promise<UserProfile> {
    const userProfile = await this.findOneProfile(id); // Reuse findOneProfile method
    return userProfile.update(updateUserProfileDto);
  }

  async deleteUser(id: number): Promise<void> {
    const user = await this.findOneUser(id); // Reuse findOneUser method
    await user.destroy();
  }

  async deleteUserProfile(id: number): Promise<void> {
    const userProfile = await this.findOneProfile(id); // Reuse findOneProfile method
    await userProfile.destroy();
  }

  // #################################################### //

  async getUserByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }
}
