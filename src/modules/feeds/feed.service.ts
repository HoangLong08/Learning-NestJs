import { FeedDto } from './feed.dto';

export class FeedService {
  createFeed(feed: FeedDto): FeedDto {
    const feedReal = FeedDto.plainToClass(feed);

    // const feedReal = plainToClass(FeedDto, feed, {
    //   excludeExtraneousValues: true,
    // });
    console.log('feedReal: ', feedReal);
    return {
      id: '',
      title: feed.title,
      permalink: feed.permalink,
      createdAt: new Date('05/21/2023'),
      updatedAt: new Date('05/21/2023'),
    };
  }
}
