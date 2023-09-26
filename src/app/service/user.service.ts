import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User{
  id: number;
  name: string;
  email: string;
  company: string;
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  // apiUrl = 'http://localhost:8085/api/users';

  users: User[] = [];


  // constructor(private http: HttpClient) { }
    
  // GetUsers(){
  //   const url = `${this.apiUrl}`;
  //   const results = this.http.get<User[]>(url);
  //   console.log(results);
  // }
  // users: User[] = [];
}