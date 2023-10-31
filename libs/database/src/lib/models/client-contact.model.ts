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
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Client } from './client.model';

@Table({ tableName: 'clientContacts' })
export class ClientContact extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => Client)
  @Column(DataType.UUID)
  clientId: string;

  @BelongsTo(() => Client, 'clientId')
  client: Client;

  @Column(DataType.STRING)
  firstName: string;

  @Column(DataType.STRING)
  lastName: string;

  @Column(DataType.STRING)
  email: string;

  @Column(DataType.STRING)
  phone: string;

  @AllowNull
  @Column(DataType.STRING)
  department: string;

  @AllowNull
  @Column(DataType.STRING)
  designation: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  isPrimary: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}