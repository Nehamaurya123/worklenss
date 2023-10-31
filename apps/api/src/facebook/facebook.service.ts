// facebook-auth.service.ts
import { Injectable } from '@nestjs/common';
import { Facebook } from '../../../../libs/database/src/lib/models/client-contact.model'; 
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class FacebookService {

  // async facebookLogin(user: Facebook) {
  //   const payload = { sub: user.id };
  //   return {
  //     access_token: this.jwtService.sign(payload),
  //   };
  // }

  facebookLogin(req){
    if(!req.user){
      return 'no user from facebook'
    }
    return {
      message:'user info from face book',
      user:req.user
    }
  }
}
