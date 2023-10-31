// facebook-auth.controller.ts
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FacebookService } from './facebook.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class FacebookController {
  constructor(private readonly faceBookService: FacebookService) {}

  // @Post()
  // @UseGuards(AuthGuard('facebook-token'))
  // async facebookLogin(@Req() req) {
  //   return this.faceBookService.facebookLogin(req.user);
  // }
  @Get()
   @UseGuards(AuthGuard('facebook'))
  async facebookAuth(@Req() req){
   // return this.faceBookService.getHello();
  }

  @Get('auth/fbcallback')
  @UseGuards(AuthGuard('facebook'))
  FacebookAuthRedirect(@Req() req){
    return this.faceBookService.facebookLogin(req)
  }

}
