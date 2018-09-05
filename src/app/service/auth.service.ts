import { Injectable, EventEmitter  } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { CookieService } from '../../../node_modules/ngx-cookie-service';
import { Resource } from './../utils/resource';
import { Observable } from '../../../node_modules/rxjs';
import { User } from '../entity/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = new EventEmitter<boolean>();

  public loginUrl = Resource.getUrl() + "oauth/token?grant_type=password&username=";
  public userUrl = Resource.getUrl() + "user";

  constructor(private http: HttpClient, private cookieService:CookieService) { }

  public setLogin(user:User): Observable<any>{

    return this.http.post<any>(this.loginUrl + user.email + "&password=" +
      encodeURIComponent(user.password), {});
  }
  public verificarToken(){
    return this.http.get(this.userUrl);
  }
  public setAuthenticated(isAuthenticated:boolean){
    this.isLogged.emit(isAuthenticated);
  }

}
