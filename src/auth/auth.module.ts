import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { UserService } from 'src/users/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService, AuthResolver, UserService]
})
export class AuthModule {}
