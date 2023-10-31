import { IsIn, IsNumber, IsString } from "class-validator";
import { EMAIL } from "../../enum/constants/user.constant";

export class CreateOtpDto {
    @IsString()
    otp:string;

    @IsString()
    email:string;
}
