import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './models/user.models';
import { UserProfile } from './models/user-profile.model';
import { AuthModule } from 'src/auth/auth.module';
import { FilesModule } from 'src/files/files.module';
import { UserProfileController } from './user-profile.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([User, UserProfile]),
    forwardRef(() => AuthModule),
    FilesModule,
  ],
  controllers: [UserController, UserProfileController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
