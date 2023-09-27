import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Blog {
  id: number;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  apiUrl = 'http://localhost:8085/api/blogs';

  blogs: Blog[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl);
  }

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`);
  }

  createBlog(blog: Blog): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, blog);
  }

  editBlog(blog: Blog): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/edit`, blog);
  }
}
