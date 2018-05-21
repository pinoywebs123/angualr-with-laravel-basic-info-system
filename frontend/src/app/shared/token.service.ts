import { Router } from '@angular/router';
import { Injectable } from "@angular/core";


@Injectable()
export class TokenService {
    logged : boolean;
    constructor(
        public router: Router,
    ){

    }
    handleToken(token){
        this.set(token);
       
    }

    get(){
        return localStorage.getItem("token");
    }

    set(token){
        return localStorage.setItem("token", token);
    }

    remove(){
       return localStorage.removeItem("token");
    }

    isValid(){
        const token = this.get();
        if(token){
            const payload = this.payload(token);
            if(payload){
                return (payload.iss === 'http://127.0.0.1:8000/api/login') ? true: false;

            }
            return false;
        }
        
    }

    payload(token){
        const payload = token.split('.')[1];
        return JSON.parse(atob(payload));
    }

    loggedIn(){
        return this.isValid();
    }

    
}