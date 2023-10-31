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
} from 'sequelize-typescript';

import { User } from './user.model';
import { Organization } from './organization.model';

@Table({ tableName: 'roles' })
export class Role extends Model {
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

  @Column(DataType.STRING)
  name: string;

  @AllowNull
  @Column(DataType.STRING)
  description: string;

  @Column(DataType.JSON)
  permissions: any;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  status: boolean;

  @ForeignKey(() => User)
  @Column(DataType.UUID)
  createdById: string;

  @BelongsTo(() => User, 'createdById')
  createdBy: User;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}