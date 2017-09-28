import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { serviceUrls } from '../common/serviceUrls';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {

  constructor(private http: Http, private router:Router) { }

  doSignIn(body) {
    return this.http.post(serviceUrls.signIn, body).map(res => res.json());
  }

  doLogout(){
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      this.router.navigate(['/account/signin']);

  }

}
