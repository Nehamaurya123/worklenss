import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  CreatedAt,
  DeletedAt,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
  AllowNull,
  Unique,
  HasMany,
} from 'sequelize-typescript';

// import { Gender } from '@worklens/types';

// import { Role } from './role.model';
// import { Organization } from './organization.model';

@Table({
  tableName: 'users',
})
export class User extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  // @ForeignKey(() => Role)
  // @Column(DataType.UUID)
  // roleId: string;

  // @BelongsTo(() => Role, 'roleId')
  // role: Role;

  // @HasMany(() => Organization, 'userId')
  // organizations: Organization[];

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  // @AllowNull
  // @Column({
  //   type: DataType.ENUM({
  //     values: Object.keys(Gender),
  //   }),
  //   defaultValue: Gender.MALE,
  // })
  // gender: Gender;

  @Unique
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  password: string;

  @AllowNull
  @Column(DataType.STRING)
  avatar: string;

  @AllowNull
  @Column(DataType.STRING)
  phone: string;

  @AllowNull
  @Column(DataType.STRING)
  designation: string;

  @AllowNull
  @Column(DataType.STRING)
  address: string;

  @AllowNull
  @Column(DataType.STRING)
  city: string;

  @AllowNull
  @Column(DataType.STRING)
  state: string;

  @AllowNull
  @Column(DataType.STRING)
  country: string;

  @AllowNull
  @Column(DataType.STRING)
  zipcode: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  status: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isEmailVerified: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  forcePasswordReset: boolean;

  // @AllowNull
  // @ForeignKey(() => User)
  // @Column(DataType.UUID)
  // createdBy: string;

  // @BelongsTo(() => User, 'createdBy')
  // creator: User;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}