import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { authService } from 'src/app/AUTH/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  title = 'Private-English';

  private user : User;

  constructor(private auth: authService,
    private route: Router){

      this.auth.usuario.subscribe(res => 
        {
          this.user = res;
          console.log("El usuario es "+ this.user);
        });
    }

  Logout(){
    this.auth.logout();
    this.route.navigate(['/login']);
  }

  session(){
    return this.auth.sessionActivate();
  }

  listar(){
    this.route.navigate(["listado"])
  }

}
