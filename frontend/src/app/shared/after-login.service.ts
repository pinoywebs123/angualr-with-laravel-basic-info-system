import { Observable } from 'rxjs/Observable';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from "@angular/core";
import { TokenService } from './token.service';

@Injectable()
export class AfterGuard implements CanActivate {
    constructor(
        public token: TokenService
    ){

    }
    canActivate(
        route: ActivatedRouteSnapshot,
         state: RouterStateSnapshot)
         : boolean | Observable<boolean> | Promise<boolean> {
        return this.token.isValid();
    }
}