import { UserService } from './user.service';
import {
  Controller,
  Body,
  Post,
  Put,
  Param,
  Get,
  Delete,
} from '@nestjs/common';
import { UserDto } from './user.dto';

@Controller('users') // localhost:port/users
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.save(user);
  }

  @Put(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() userDto: UserDto,
  ): Promise<UserDto> {
    return this.userService.update(id, userDto);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteById(id);
  }
}
