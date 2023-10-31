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

import { AddressType } from '@worklens/types';

@Table({ tableName: 'clientAddresses' })
export class ClientAddress extends Model {
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

  @Column({
    type: DataType.ENUM({
      values: Object.keys(AddressType),
    }),
    defaultValue: AddressType.BILLING,
  })
  type: AddressType;

  @Column(DataType.STRING)
  address: string;

  @Column(DataType.STRING)
  country: string;

  @Column(DataType.STRING)
  state: string;

  @Column(DataType.STRING)
  city: string;

  @Column(DataType.STRING)
  pincode: string;

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