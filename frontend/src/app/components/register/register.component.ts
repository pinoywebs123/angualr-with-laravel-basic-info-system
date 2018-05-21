import { AuthService } from './../../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  appForm: FormGroup;
  constructor(
    public auth: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.appForm = new FormGroup({
      'name': new FormControl(null, [Validators.required,Validators.minLength(2),Validators.maxLength(30)]),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)])
    })
  }

  onRegister(){
    console.log(this.appForm.value);
    this.auth.registerUser(this.appForm.value).subscribe(
      (res)=> {
        if(res['status'] == true){
          this.router.navigateByUrl('/auth');
        }
      }
    )
  }

}
