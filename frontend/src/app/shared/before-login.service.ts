import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { TokenService } from './token.service';

@Injectable()
export class BeforeGuard implements CanActivate {
    constructor(
        public token: TokenService
    ){

    }

    canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot)
        : boolean | Observable<boolean> | Promise<boolean> {
        return !this.token.loggedIn();
    }
}