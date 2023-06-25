import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
  UsePipes,
  ValidationPipe,
  Inject,
} from '@nestjs/common';
import { FeedDto } from './feed.dto';
import { FeedService } from './feed.service';
import { ModuleRef } from '@nestjs/core';
// import { plainToClass } from 'class-transformer';
// https://www.youtube.com/watch?v=VLWgl0ppMUw&list=PLBDM9hnrmIVZ0HkYOZk5lBrGuGoEZ7Yfm&index=5
@Controller('feeds') //localhost:port/feeds
export class FeedController {
  // feedService: FeedService; // cách ni dở vcl

  // constructor() {
  //   // this.feedService = new FeedService(); // cách ni dở vcl
  // }

  // constructor(private moduleRef: ModuleRef) {} // cách ni cũng ổn

  //

  // constructor(
  //   private readonly feedService: FeedService,
  // ) {}

  constructor(
    @Inject('FEED_SERVICE_LH') private readonly feedService: FeedService,
  ) {}

  // const;

  @Get()
  getAllFeeds() {
    return [{ name: 'long' }, { name: 'hoang' }];
  }

  // @UsePipes(new ValidationPipe())
  @Post()
  createPost(@Body() feed: FeedDto): FeedDto {
    // const feedReal = FeedDto.plainToClass(feed);
    // // const feedReal = plainToClass(FeedDto, feed, {
    // //   excludeExtraneousValues: true,
    // // });
    // console.log('feedReal: ', feedReal);
    // return {
    //   id: '',
    //   title: feed.title,
    //   permalink: feed.permalink,
    //   createdAt: new Date('05/21/2023'),
    //   updatedAt: new Date('05/21/2023'),
    // };

    // return this.feedService.createFeed(feed); cách này dở

    // const feedService = this.moduleRef.get(FeedService);
    // return feedService.createFeed(feed);

    return this.feedService.createFeed(feed);
  }

  @Get(':id') // users/1
  getFeedById(@Param('id', ParseIntPipe) id: number) {
    console.log('id: ', id);

    return 'testing';
  }
}
