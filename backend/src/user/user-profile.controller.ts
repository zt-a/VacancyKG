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
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserProfile } from './models/user-profile.model';
import {
  CreateUserProfileDto,
  UpdateUserProfileDto,
} from './dto/create-user-profile.dto';
import { UserService } from './user.service';

@ApiTags('UsersProfiles')
@Controller('users/profiles')
export class UserProfileController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all user profiles' })
  @ApiResponse({
    status: 200,
    description: 'List of user profiles',
    type: [UserProfile],
  })
  async findAllProfiles(): Promise<UserProfile[]> {
    return await this.userService.findAllProfiles();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new user profile' })
  @ApiResponse({
    status: 201,
    description: 'The user profile has been successfully created',
    type: UserProfile,
  })
  async createUserProfile(
    @Body() createUserProfileDto: CreateUserProfileDto,
    @UploadedFile() image: any,
  ): Promise<UserProfile> {
    return await this.userService.createUserProfile(
      createUserProfileDto,
      image,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific user profile by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'User Profile ID' })
  @ApiResponse({
    status: 200,
    description: 'User profile details',
    type: UserProfile,
  })
  @ApiResponse({ status: 404, description: 'User profile not found' })
  async findOneUserProfile(@Param('id') id: number): Promise<UserProfile> {
    return await this.userService.findOneProfile(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing user profile by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'User Profile ID' })
  @ApiResponse({
    status: 200,
    description: 'The user profile has been successfully updated',
    type: UserProfile,
  })
  @ApiResponse({ status: 404, description: 'User profile not found' })
  async updateUserProfile(
    @Param('id') id: number,
    @Body() userProfile: UpdateUserProfileDto,
  ): Promise<UserProfile> {
    return await this.userService.updateUserProfile(id, userProfile);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user profile by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'User Profile ID' })
  @ApiResponse({
    status: 200,
    description: 'The user profile has been successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'User profile not found' })
  async deleteUserProfile(@Param('id') id: number): Promise<string> {
    await this.userService.deleteUserProfile(id);
    return 'Deleted ' + id;
  }
}
