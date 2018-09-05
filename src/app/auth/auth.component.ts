import { Component, OnInit } from '@angular/core';
import { User } from '../entity/user';
import { AuthService } from '../service/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  public user:User;
  constructor(
    private authService:AuthService, 
    private cookieService:CookieService,
    private router:Router
  ) { }

  public autenticate(){
    this.authService.setLogin(this.user).subscribe(
      response => {
        this.cookieService.set("access_token", response.access_token);
        this.authService.setAuthenticated(true);
        this.router.navigate(['/home']);
      }
    );
  }

  ngOnInit() {
    this.user = new User();
    this.user.password = "123";
    this.user.email = "nataniel.paiva@gmail.com";
  }

}
