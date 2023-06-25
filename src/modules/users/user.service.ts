import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDto } from './user.dto';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async save(userDto: UserDto): Promise<UserDto> {
    const saveUser = await this.userRepository.save(userDto);

    // khi mà plain thì có thêm field {excludeExtraneousValues: true}
    return plainToInstance(UserDto, saveUser);
  }

  async update(id: string, userDto: UserDto): Promise<UserDto> {
    const updateUser = await this.userRepository.update(id, userDto);
    console.log('updateUser: ', updateUser);

    return plainToInstance(UserDto, updateUser);
  }

  async findOne(id: string): Promise<UserDto> {
    const foundUser = await this.userRepository.findOne({
      where: {
        id: id as string,
      },
    });
    return plainToInstance(UserDto, foundUser);
  }

  async deleteById(id: string): Promise<{ result: string }> {
    const deleteRes = await this.userRepository.delete(id);
    return { result: 'success' };
  }
}
