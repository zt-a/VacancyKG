import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User, UserRole } from './models/user.models';
import { UserProfile } from './models/user-profile.model';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';
import {
  CreateUserProfileDto,
  UpdateUserProfileDto,
} from './dto/create-user-profile.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of users', type: [User] })
  @UseGuards(JwtAuthGuard)
  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Get('profiles')
  @ApiOperation({ summary: 'Get all user profiles' })
  @ApiResponse({
    status: 200,
    description: 'List of user profiles',
    type: [UserProfile],
  })
  async findAllProfiles(): Promise<UserProfile[]> {
    return await this.userService.findAllProfiles();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a specific user by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User details', type: User })
  @ApiResponse({ status: 404, description: 'User not found' })
  async findOneUser(@Param('id') id: number): Promise<User> {
    return await this.userService.findOneUser(+id);
  }

  @Get('profiles/:id')
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

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'The user has been successfully created',
    type: User,
  })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }

  @Post('profiles')
  @ApiOperation({ summary: 'Create a new user profile' })
  @ApiResponse({
    status: 201,
    description: 'The user profile has been successfully created',
    type: UserProfile,
  })
  async createUserProfile(
    @Body() createUserProfieDto: CreateUserProfileDto,
    @UploadedFile() image: any,
  ): Promise<UserProfile> {
    return await this.userService.createUserProfile(createUserProfieDto, image);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update an existing user by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully updated',
    type: User,
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async updateUser(
    @Param('id') id: number,
    @Body() user: UpdateUserDto,
  ): Promise<User> {
    return await this.userService.updateUser(id, user);
  }

  @Put('profiles/:id')
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
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'User ID' })
  @ApiResponse({
    status: 200,
    description: 'The user has been successfully deleted',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async deleteUser(@Param('id') id: number): Promise<string> {
    await this.userService.deleteUser(id);
    return 'Deleted ' + id;
  }

  @Delete('profiles/:id')
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
