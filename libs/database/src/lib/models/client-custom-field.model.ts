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
} from 'sequelize-typescript';
import { Client } from './client.model';
import { CustomField } from './custom-field.model';

@Table({ tableName: 'clientCustomFields' })
export class ClientCustomField extends Model {
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

  @ForeignKey(() => CustomField)
  @Column(DataType.UUID)
  customFieldId: string;

  @Column(DataType.JSON)
  value: any;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}