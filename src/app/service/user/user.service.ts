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

  headerOptions = {
    withCredentials: true
  };

  constructor(
    private http: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl, this.headerOptions);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/${id}`, this.headerOptions);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user, this.headerOptions);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${user.id}`, user, this.headerOptions);
  }

  deleteUser(id: number): Observable<User> {
    return this.http.delete<User>(`${this.apiUrl}/${id}`, this.headerOptions);
  }
}
