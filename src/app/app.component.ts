import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from './AUTH/service/auth.service';
import { User } from './Shared/Models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}
