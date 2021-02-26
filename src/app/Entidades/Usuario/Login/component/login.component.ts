import { Component, OnInit } from '@angular/core';
import { authService } from 'src/app/AUTH/service/auth.service';
import { Usuario } from 'src/app/Shared/Models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: Usuario = {usuario:'' , password:''};

  constructor(public auth: authService ) { }

  ngOnInit(): void {
  }


  login(){
    this.auth.login(this.user).subscribe(response=>{
        console.log(response);
    })
}
}
