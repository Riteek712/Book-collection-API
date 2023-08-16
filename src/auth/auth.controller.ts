import { Controller,Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
@Controller('auth')
/*
    -> the controller will need to call the service.
    -> the controller will recive a request from the internet, for instance , a POST request asking to login a user.
    -> and then its going to call a function from the auth.service and return its result back to the client/browser.
*/
export class AuthController{
    constructor(private authService : AuthService){}
    // this.authService.test()

    @Get()
    helloW(){
        return this.authService.helloW()

    }

    @Post('signup')
    signup(){
        return this.authService.signup()
    }
    @Post('signin')
    signin(){
        return this.authService.signin()
    }
    
    // @Post('signup')

    

}