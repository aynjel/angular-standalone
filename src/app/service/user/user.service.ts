import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  education: string;
  dob: string;
  gender: string;
  company: string;
  role: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl = 'http://localhost:8085/api/users';

  users: User[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
