import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { TokenService } from './shared/token.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  logged : boolean;

  constructor(
    public token : TokenService,
    public router: Router,
    public auth: AuthService
  ){}

  ngOnInit(){
     return this.auth.authStatus.subscribe(
      (value)=> {
        this.logged = value;
        console.log(this.logged);
      }
     )
    
  }

  logout(){
    this.token.remove();
    this.auth.changeStatus(false);
    this.router.navigate(['/']);
  }


}
