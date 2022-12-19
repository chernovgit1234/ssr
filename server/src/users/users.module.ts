
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from '@nestjs/sequelize'
import {User} from './users.model'
import {Role} from '../roles/roles.model'
import { UserRole } from 'src/roles/user-roles.model';
import { RolesModule } from 'src/roles/roles.module';
import { AuthModule } from 'src/auth/auth.module';
import { forwardRef, Module } from '@nestjs/common';
import { Post } from 'src/posts/post.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    SequelizeModule.forFeature( [User, Role, UserRole, Post] ),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [
    UsersService
  ]
})
export class UsersModule {}
