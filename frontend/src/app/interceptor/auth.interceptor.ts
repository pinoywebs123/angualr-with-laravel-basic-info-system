import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { HttpResponse,HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpUserEvent } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): 
        Observable<HttpSentEvent |
         HttpHeaderResponse |
          HttpProgressEvent | 
          HttpResponse<any> | HttpUserEvent<any>> {
        
            const token = localStorage.getItem("token");
            if(token){
                const clone = req.clone({
                    headers: req.headers.set("Authorization", 
                    "Bearer "+ token)
                });
                return next.handle(clone);

            }else{
                return next.handle(req);
            }
    }
}