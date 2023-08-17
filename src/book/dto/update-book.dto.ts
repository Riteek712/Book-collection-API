import { IsOptional, IsString, IsNumber, IsEnum, IsEmpty } from "class-validator"
import { Category } from "../schemas/book.schema"
import { User } from "src/auth/user.schema"


export class UpdateBookDto{
    @IsOptional()
    @IsString()
    readonly title: string
    @IsOptional()
    @IsString()
    readonly description: string
    @IsOptional()
    @IsString()
    readonly author: string
    @IsOptional()
    @IsNumber()
    readonly price: number
    @IsOptional()
    @IsEnum( Category, {message: `Please enter a catagory!`})
    readonly category: Category
    @IsEmpty({message: "you can not pass user id."})
    readonly user: User;
}