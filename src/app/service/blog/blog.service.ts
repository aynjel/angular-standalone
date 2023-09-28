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

  headerOptions = {
    withCredentials: 'true',
  };

  constructor(
    private http: HttpClient
  ) { }

  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl,{
      headers: {
        withCredentials: 'true',
      }
    });
  }

  getBlog(id: number): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${id}`,{
      headers: {
        withCredentials: 'true',
      }
    });
  }

  createBlog(blog: Blog): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/create`, blog, {
      headers: {
        withCredentials: 'true',
      }
    });
  }

  editBlog(blog: Blog): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${blog.id}/update`, blog, {
      headers: {
        withCredentials: 'true',
      }
    });
  }

  deleteBlog(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}/delete`, {
      headers: {
        withCredentials: 'true',
      }
    });
  }
}
