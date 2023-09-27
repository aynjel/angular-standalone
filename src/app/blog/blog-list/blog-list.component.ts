import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Blog, BlogService } from 'src/app/service/blog/blog.service';
import { BlogCardComponent } from '../blog-card/blog-card.component';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs';
import { MaterialModule } from 'src/material.module';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    CommonModule,
    BlogCardComponent,
    MaterialModule
  ],
  template: `
  <section>
    <div class="container">
      <app-blog-card *ngFor="let blog of blogsPerPage" [blog]="blog"></app-blog-card>
      <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
    </div>
  </section>
  `,
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {

  blogs: Blog[] = [];
  blogsPerPage: Blog[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.LoadBlogs();
  }

  LoadBlogs() {
    this.blogService.getBlogs()
    .pipe(
      map((data: Blog[]) => {
        return data.map((blog: Blog) => {
          return {
            id: blog.id,
            title: `${blog.title} Title`,
            content: blog.content,
          };
        });
      }),
      retry(3),
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return [];
      })
    )
    .subscribe({
      next: (data: Blog[]) => {
        this.blogs = data;
        this.blogsPerPage = this.blogs.reverse().slice(0, 3);
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }
}
