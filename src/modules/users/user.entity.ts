import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type UserRoleType = 'admin' | 'user';

@Entity({ name: 'user' }) // name table  || { synchronize: false }
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  isActive: boolean;

  // https://typeorm.io/entities#enum-column-type
  @Column({
    type: 'enum',
    enum: ['admin', 'user'],
    default: 'user',
  })
  role: UserRoleType;
}
