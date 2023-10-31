import { IsString } from "class-validator";

export class CreateFacebookDto {
    @IsString()
    userId:string;

   
}
