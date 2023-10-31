import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
  AllowNull,
  Unique,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import { User } from './user.model';

@Table({ tableName: 'organizations' })
export class Organization extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @AllowNull
  @ForeignKey(() => User)
  @Column(DataType.UUID)
  userId: string;

  @BelongsTo(() => User, 'userId')
  user: User;

  @Column(DataType.STRING)
  name: string;

  @AllowNull
  @Unique
  @Column(DataType.STRING)
  workspace: string;

  @AllowNull
  @Column(DataType.STRING)
  description: string;

  @AllowNull
  @Column(DataType.STRING)
  website: string;

  @AllowNull
  @Column(DataType.STRING)
  logo: string;

  @AllowNull
  @Column(DataType.STRING)
  country: string;

  @AllowNull
  @Column(DataType.STRING)
  state: string;

  @AllowNull
  @Column(DataType.STRING)
  city: string;

  @AllowNull
  @Column(DataType.STRING)
  pincode: string;

  @AllowNull
  @Column(DataType.STRING)
  address: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  status: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isDefault: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}