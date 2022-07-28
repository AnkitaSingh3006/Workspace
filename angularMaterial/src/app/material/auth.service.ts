import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl = "https://reqres.in/api/login";
  userUrl = "https://reqres.in/api/users?page=2";

  constructor(private http: HttpClient) { }

  loginUser(user: any) {
    return this.http.post(this.loginUrl, user);
  }

  users() {
    return this.http.get(this.userUrl);
  }
}
