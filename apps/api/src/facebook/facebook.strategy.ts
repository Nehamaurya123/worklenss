// facebook.strategy.ts
import { Strategy } from 'passport-facebook';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { VerifyCallback } from 'jsonwebtoken';
@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
  constructor() {
    super({
      clientID:'3616529345283680',
      clientSecret: '0178f5e269c8508f04ebab1914d70d14',
      callbackURL: 'http://localhost:3000/auth/fbcallback',
      scope:['email','profile']
      // authorizationURL: 'https://www.facebook.com/v12.0/dialog/oauth', // Specify the authorization URL here
      // profileFields: ['id', 'email', 'name'], // Include the fields you need
    });
  }
  
  async validate(accessToken: string, refreshToken: string, profile: any,done:VerifyCallback): Promise<any> {
   const {emails, name, photos}=profile
   const user={
    email:emails[0].value,
    firstName:name.givenName,
    lastName:name.familyName,
    picture:photos[0].value,
    accessToken,
   }
   done(null,user)
  }
}
