import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/users/user.module';
import { UserEntity } from './modules/users/user.entity';
import { UserController } from './modules/users/user.controller';
import { UserService } from './modules/users/user.service';
// import { FeedModule } from './modules/feeds/feed.module';

//là một decorator dùng để đánh dấu một class là một module.
// Mỗi module trong NestJS thường tương ứng với một phần chức năng cụ thể của ứng dụng, ví dụ như quản lý người dùng, gửi email, truy vấn cơ sở dữ liệu, v.v.
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123123',
      database: 'webblog',
      entities: [UserEntity], // execute entities to db
      synchronize: true, // không được set này là true phải dùng migration và seed
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
