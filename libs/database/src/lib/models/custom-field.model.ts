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

import { CustomFieldType } from '@worklens/types';

import { Organization } from './organization.model';

@Table({ tableName: 'customFields' })
export class CustomField extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => Organization)
  @Column(DataType.UUID)
  organizationId: string;

  @Column(DataType.STRING)
  for: string;

  @Column({
    type: DataType.ENUM({
      values: Object.keys(CustomFieldType),
    }),
    defaultValue: CustomFieldType.TEXTBOX,
  })
  type: CustomFieldType;

  @Column(DataType.STRING)
  label: string;

  @AllowNull
  @Column(DataType.STRING)
  description: string;

  @Column(DataType.JSON)
  config: any;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}