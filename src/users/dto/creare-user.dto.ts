import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: 'user@gmail.com', description: 'Почта'})
    @IsString({message: 'Должно быть строкой'})
    @IsEmail({}, {message: 'Некорректный email'})
    readonly email: string;
    @ApiProperty({example: '12345678', description: 'Пароль'})
    @IsString({message: 'Должно быть строкой'})
    @Length(6, 32, {message: 'Пароль должен быть длиной не меньше 6 символов'})
    readonly password: string;
}