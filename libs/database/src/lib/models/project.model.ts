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
} from 'sequelize-typescript';

import { Client } from './client.model';

@Table({ tableName: 'projects' })
export class Project extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column(DataType.STRING)
  title: string;

  @AllowNull
  @Column(DataType.STRING)
  description: string;

  @ForeignKey(() => Client)
  clientId: string;

  @AllowNull
  @Column(DataType.STRING)
  logo: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  status: boolean;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}