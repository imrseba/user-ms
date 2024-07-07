import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { USER_REPOSITORY, UserRepository } from './user.repository';
import { hashSync } from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userRepository: UserRepository,
  ) {}

  async createUser(body: CreateUserDto) {
    body.password = hashSync(body.password, 10);
    return await this.userRepository.createUser(body);
  }

  async getAllUsers() {
    return await this.userRepository.getAllUsers();
  }

  async getUser(id: number) {
    return await this.userRepository.getUser(id);
  }

  async updateUser(id: number, body: UpdateUserDto) {
    if (body.password) {
      body.password = hashSync(body.password, 10);
    }
    return await this.userRepository.updateUser(id, body);
  }

  async removeUser(id: number) {
    return await this.userRepository.deleteUser(id);
  }
}

