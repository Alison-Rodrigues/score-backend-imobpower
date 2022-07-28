import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dtos/user.dto';
import { User } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const newUser = new User();

    const user = await this.userRepository.save(
      Object.assign(newUser, { ...data, salt: '' }),
    );

    return user;
  }

  async list(): Promise<User[]> {
    return this.userRepository.find();
  }
}
