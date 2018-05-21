import { TokenService } from './token.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  private loggedIn = new BehaviorSubject< boolean >( this.token.loggedIn() );
  authStatus = this.loggedIn.asObservable();

  base = 'http://127.0.0.1:8000/api/';
  constructor(
    public http : HttpClient,
    public token: TokenService
  ) { }


  changeStatus(value: boolean){
    return this.loggedIn.next(value);
  }

  registerUser(userData: any){
    return this.http.post(this.base+'register', userData).map(
      (res)=> res = res
    )
  }

  loginUser(userData: any){
    return this.http.post(this.base+'login', userData).map(
      (res)=> res = res,
      (error) => error = error,
    )
  }

}
