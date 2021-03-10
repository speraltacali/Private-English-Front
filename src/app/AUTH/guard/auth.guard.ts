import { Injectable } from '@angular/core';
import { Router , CanActivate , ActivatedRouteSnapshot} from '@angular/router';
import { authService } from '../service/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{

    constructor(private route: Router ,
        private authservice: authService){

    } 

    canActivate(route: ActivatedRouteSnapshot){
        const user = this.authservice.usuarioData;

        if (user) {
            return true;
        }

        this.route.navigate(['/login']);
            return false;

    }
}