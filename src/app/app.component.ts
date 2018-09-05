import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isLogged = false;
  constructor(private authService:AuthService){}
  public ngOnInit(){
    this.authService.isLogged.subscribe(
      is => this.isLogged = is
    );

  }
}
