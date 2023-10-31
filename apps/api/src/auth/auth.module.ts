import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from '@models/user.model';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';


@Module({
   //imports: [JwtModule],
  imports:[SequelizeModule.forFeature([User]),JwtModule],
  controllers: [AuthController], 
  providers: [AuthService],
})
export class AuthModule {}
