import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  email: string;
  password: string;
  education: string;
  dob: string;
  gender: string;
  company: string;
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
    password: '',
    education: '',
    dob: '',
    gender: '',
    company: ''
  };

  headerOptions = {
    withCredentials: true
  };

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  login(data: Login): Observable<any> {
    return this.http.post(`${this.apiURL}/login`, data, this.headerOptions);
  }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiURL}/register`, data, this.headerOptions);
  }

  logout(): Observable<any> {
    return this.http.post(`${this.apiURL}/logout`, {}, this.headerOptions);
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
