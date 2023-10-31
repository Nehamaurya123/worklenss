import { Injectable } from '@nestjs/common';
import { UpdateOtpDto } from './dto/update-otp.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Otp } from '@models/client.model';
import * as nodemailer from 'nodemailer';

@Injectable()
export class OtpService {
  constructor(@InjectModel(Otp) private readonly otps: typeof Otp) {}
 
  async generateOTP(email: string): Promise<string> {
    const user = await this.otps.findOne({
      where: {email}
    });

    if (!user) {
      throw new Error('User not found');
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Save OTP to the user's record
    user.otp = otp;
    await this.otps.create({email,otp});

    // Send OTP to the user's email
    await this.sendOtpByEmail(user.email, otp);

    return otp;
  }

  async sendOtpByEmail(email: string, otp: string): Promise<void> {
    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      // Configure the transporter options (e.g., SMTP server details)
    });

    // Send the email with OTP
    await transporter.sendMail({
      from: 'juhimaurya92@gmail.com',
      to: email,
      subject: 'OTP Verification',
      text: `Your OTP is: ${otp}`,
    });
  }

  findAll() {
    return this.otps.findAll();
  }

  findOne(id: number) {
    return this.otps.findOne({
      where: {
        id: id,
      },
    });
  }

  update(id: number, updateOtpDto: UpdateOtpDto) {
    return this.otps.update(updateOtpDto, {
      where: {
        id: id,
      },
    });
  }

  remove(id: number) {
    return this.otps.destroy({
      where: {
        id: id,
      },
    });
  }
}


