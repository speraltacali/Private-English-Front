import { Component, OnInit } from '@angular/core';
import { authService } from 'src/app/AUTH/service/auth.service';
import { Login } from 'src/app/Shared/Models/usuario';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //user: Usuario = {usuario:'' , password:'' , estado:null ,eliminado: null, personaId:null,cargo:null};
  user: Login = {usuario:'' , password:'' , cargo: null}; 

  constructor(public auth: authService ,
    private router: Router ) {

      if (this.auth.usuarioData) {
        this.router.navigate(['/']);  
      }

     }

  ngOnInit(): void {
  }


  login(){
    this.auth.login(this.user).subscribe(response=>{
        if (response.exito === 1) {
          this.router.navigate(['/login']);
        }
    })
  }

  
}
