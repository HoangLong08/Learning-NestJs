import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';

export class FeedDto extends BaseDto {
  @IsNotEmpty()
  @Expose()
  title: string;

  // lastName: string;

  // firstName: string;

  // @Transform(({ obj }) => obj.firstName + obj.lastName)
  // fullName: string;

  @Expose()
  permalink: string;
}
