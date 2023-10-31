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
  HasMany,
} from 'sequelize-typescript';

import { ClientType } from '@worklens/types';

import { Organization } from './organization.model';
import { ClientContact } from './client-contact.model';
import { ClientAddress } from './client-address.model';
import { CustomField } from './custom-field.model';

@Table({ tableName: 'clients' })
export class Client extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => Organization)
  @Column(DataType.UUID)
  organizationId: string;

  @BelongsTo(() => Organization, 'organizationId')
  organization: Organization;

  @Column({
    type: DataType.ENUM({
      values: Object.keys(ClientType),
    }),
    defaultValue: ClientType.BUSINESS,
  })
  type: ClientType;

  @HasMany(() => ClientContact, 'clientId')
  contacts: ClientContact[];

  @HasMany(() => ClientAddress, 'clientId')
  addresses: ClientAddress[];

  @HasMany(() => CustomField, 'customFieldId')
  customFields: CustomField[];

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.STRING)
  displayName: string;

  @Column(DataType.STRING)
  gstTreatment: string;

  @Column(DataType.STRING)
  pan: string;

  @Column(DataType.STRING)
  placeOfSupply: string;

  @Column(DataType.STRING)
  taxPrefernce: string;

  @Column(DataType.STRING)
  currency: string;

  @Column(DataType.STRING)
  paymentTerms: string;

  @AllowNull
  @Column(DataType.STRING)
  gstNumber: string;

  @AllowNull
  @Column(DataType.STRING)
  legalName: string;

  @AllowNull
  @Column(DataType.STRING)
  tradeName: string;

  @AllowNull
  @Column(DataType.STRING)
  tan: string;

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
  @Column({
    type: DataType.STRING,
    defaultValue: 'Organic',
  })
  referredBy: string;

  @AllowNull
  @Column(DataType.STRING)
  remarks: string;

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