import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compareSync } from 'bcrypt';
import { UserService } from 'src/users/user.service';
import { AuthInput } from './dto/auth.input';
import { AuthType } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(data: AuthInput): Promise<AuthType> {
    const user = await this.userService.getUserByEmail(data.email);

    const validPasssword = compareSync(data.password, user.password);

    if(!validPasssword) {
      throw new UnauthorizedException('Incorrect password')
    }

    return {
      user,
      token: 'acess_token'
    }
  }
}
