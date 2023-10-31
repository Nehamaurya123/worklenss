import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  CreatedAt,
  UpdatedAt,
  AllowNull,
} from 'sequelize-typescript';

@Table({ tableName: 'leads' })
export class Lead extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'email',
  })
  method: string;

  @Column(DataType.STRING)
  email: string;

  @AllowNull
  @Column(DataType.STRING)
  ua: string;

  @AllowNull
  @Column(DataType.STRING)
  ip: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isAccountCreated: boolean;

  @AllowNull
  @Column(DataType.UUID)
  userId: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}