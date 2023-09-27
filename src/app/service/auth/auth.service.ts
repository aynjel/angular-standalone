import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiURL: string = 'http://localhost:8085/api/auth';

  loginData: Login = {
    email: '',
    password: ''
  };

  registerData: Register = {
    name: '',
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(data: Login): Observable<any> {
    return from(this.http.post(`${this.apiURL}/login`, data, {
      withCredentials: true
    }));
  }

  register(data: Register): Observable<any> {
    return from(this.http.post(`${this.apiURL}/register`, data, {
      withCredentials: true
    }));
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiURL}/logout`, {}, {
      withCredentials: true
    });
  }

  isLoggedIn(): boolean {
    return this.cookieService.check('access_token');
  }

  getToken(): string {
    return this.cookieService.get('access_token');
  }

  getUserDetails(): any {
    return this.http.get(`${this.apiURL}/user`, {
      withCredentials: true
    });
  }
}
