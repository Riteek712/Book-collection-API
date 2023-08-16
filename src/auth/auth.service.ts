import { Injectable } from "@nestjs/common";

@Injectable({})


export class AuthService{
    helloW(){
        return { msg : "Hello Dear!"}
    }
    signin(){
        return { msg : 'I have signed in.'}
    }
    // test(){
    //     console.log("runing test!")
    // }
    signup(){
        return { msg: 'I have signed up'}
    }
    
}