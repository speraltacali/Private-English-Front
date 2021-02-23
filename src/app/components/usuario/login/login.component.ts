import { Component , OnInit } from '@angular/core';
import { authService } from 'src/app/Service/Security/auth.service';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit{

    public usuario: string;
    public password: string;

    constructor(public auth: authService){

    }

    ngOnInit(){

    }

    login(){
        this.auth.login(this.usuario , this.password).subscribe(response=>{
            console.log(response);
        })
    }
}