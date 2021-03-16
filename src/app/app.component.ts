import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from './AUTH/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Private-English';

  constructor(private auth: authService,
    private route: Router){

    }

  Logout(){
    this.auth.logout();
    this.route.navigate(['/login']);
  }

  session(){
    return this.auth.sessionActivate();
  }

}
