import { Expose, plainToClass } from 'class-transformer';
export abstract class BaseDto {
  // Cái này nên là baseEntity
  @Expose()
  id: string;

  @Expose()
  createdAt: Date;

  @Expose()
  updatedAt: Date;

  static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
    return plainToClass(this, obj, { excludeExtraneousValues: true });
  }
}
