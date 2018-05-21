import { HttpErrorResponse } from '@angular/common/http';

import { TokenService } from './../../shared/token.service';
import { AuthService } from './../../shared/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = [];
  appForm : FormGroup;
 
  constructor(
    public auth: AuthService,
    public token : TokenService,
    public router: Router
  ) { }

  ngOnInit() {
    this.appForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required,Validators.minLength(5)])

    })
  }

  onLogin(){
    
    this.auth.loginUser(this.appForm.value).subscribe(
      (res)=> {
       
        const loggeIn = this.token.handleToken(res['token']);
        this.auth.changeStatus(true);
        this.router.navigate(['/students']);
       
      },
      (error: HttpErrorResponse)=> {
       console.log(this.handleError(error));
        
      }
    )
  }

  handleError(error){
    return this.error = error.error;
  }

}
