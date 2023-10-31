import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigService } from '@config';
import { User } from '@models/user.model';
import { Lead } from '@models/lead.model';
import { Role } from '@models/role.model';
import { VerificationCode } from '@models/varification-code.model';
import { Project } from '@models/project.model';
import { Client } from '@models/client.model';
import { CustomField } from '@models/custom-field.model';
import { ClientCustomField } from '@models/client-custom-field.model';
import { ClientContact } from '@models/client-contact.model';
import { ClientAddress } from '@models/client-address.model';
import { Organization } from '@models/organization.model';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      imports: [],
      useFactory: (config: ConfigService) => {
        return {
          dialect: 'postgres',
          host: config.get('PG_HOST') || '127.0.0.1',
          port: config.get('PG_PORT') || 5432,
          username: config.get('PG_USERNAME') || 'worklens',
          password: config.get('PG_PASSWORD') || '',
          database: config.get('PG_DATABASE') || 'worklens',
          autoLoadModels: true,
          models: [User,Lead,Role,VerificationCode,Project,Client,CustomField,ClientCustomField,ClientContact,ClientAddress,Organization ],
          define: {
            timestamp: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: false,
            underscored: true,
          },
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}