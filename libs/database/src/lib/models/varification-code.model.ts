import { VerificationCodeType } from '@worklens/types';
import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
  AllowNull,
  CreatedAt,
} from 'sequelize-typescript';

@Table({
  tableName: 'verificationCodes',
  indexes: [
    {
      name: 'emailIndex',
      fields: ['email', 'code'],
    },
  ],
})
export class VerificationCode extends Model {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column(DataType.UUID)
  userId: string;

  @AllowNull
  @Column(DataType.STRING)
  phone: string;

  @AllowNull
  @Column(DataType.STRING)
  email: string;

  @Column(DataType.INTEGER)
  code: number;

  @Column(DataType.DATE)
  ttl: Date;

  @AllowNull
  @Column({
    type: DataType.ENUM({
      values: Object.keys(VerificationCodeType),
    }),
    defaultValue: VerificationCodeType.EMAIL,
  })
  type: VerificationCodeType;

  @CreatedAt
  createdAt: Date;
}