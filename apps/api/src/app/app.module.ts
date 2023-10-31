import { Module } from '@nestjs/common';
import { DatabaseModule } from '@cms-demo/database';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { resolve } from 'path';
import { UserModule } from '../user/user.module';
import { OtpModule } from '../otp/otp.module';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { FacebookModule } from '../facebook/facebook.module';
import { FacebookStrategy } from '../facebook/facebook.strategy';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: resolve(__dirname, '../.env'),
    }),
    DatabaseModule,
    UserModule,
    OtpModule,
    AuthModule,
    JwtModule, 
  ],
  providers: [ConfigService,FacebookStrategy],
})
export class AppModule {}
