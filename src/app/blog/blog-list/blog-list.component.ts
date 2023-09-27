import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/service/blog/blog.service';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
  ],
  template: `
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4" *ngFor="let blog of blogs">
          <mat-card class="blog-card">
            <mat-card-header>
              <mat-card-title>{{blog.title}}</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <p>{{blog.content}}</p>
            </mat-card-content>
            <mat-card-actions>
              <button mat-raised-button color="primary">Read More</button>
            </mat-card-actions>
          </mat-card>
        </div>
      </div>
    </div>
  </section>
  `,
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {

  blogs = [
    {
      title: 'Blog Title 1',
      content: 'Blog Content 1',
    },
    {
      title: 'Blog Title 2',
      content: 'Blog Content 2',
    },
    {
      title: 'Blog Title 3',
      content: 'Blog Content 3',
    }
  ];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    // this.blogService.getBlogs().subscribe(
    //   (res: any) => {
    //     this.blogs = res.data;
    //   },
    //   (err: any) => {
    //     console.log(err);
    //   }
    // );
  }
}
