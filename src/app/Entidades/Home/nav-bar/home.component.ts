import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from 'src/app/AUTH/service/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: authService,
    private route: Router) { }

  ngOnInit(): void {
  }

  Logout(){
    this.auth.logout();
    this.route.navigate(['/login']);
  }

}
