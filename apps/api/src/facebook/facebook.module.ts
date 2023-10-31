// facebook-auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FacebookService } from './facebook.service';
import { FacebookController } from './facebook.controller';
import { FacebookStrategy } from './facebook.strategy';

@Module({
  imports: [
    // PassportModule.register({ defaultStrategy: 'facebook-token' }),
  ],
  controllers: [FacebookController],
  providers: [FacebookService,FacebookStrategy],
})
export class FacebookModule {}
