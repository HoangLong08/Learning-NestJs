import { Module } from '@nestjs/common';
import { FeedController } from './feed.controller';
import { FeedService } from './feed.service';

@Module({
  controllers: [FeedController],
  // providers: [FeedService],
  providers: [{ provide: 'FEED_SERVICE_LH', useClass: FeedService }],
})
export class FeedModule {}
