import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { authService } from '../service/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor{


    constructor(private authservice: authService){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const user = this.authservice.usuarioData;

        if (user) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            })
        }

        return next.handle(request);
    }

    
}