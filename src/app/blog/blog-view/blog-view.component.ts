import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { Blog, BlogService } from 'src/app/service/blog/blog.service';


@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  template: `
  <section>
    <div class="container">
      <mat-card class="blog-card">
        <mat-card-header>
          <mat-card-title>Blog Details</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h2>
            Title: {{blogDetails.title}}
          </h2>
          <h4>
            Content: {{blogDetails.content}}
          </h4>
          <p>Blog ID: {{blogId}}</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="accent" [routerLink]="['/blog']">
            Back
          </button>
          <button mat-raised-button color="dark" [routerLink]="['/blog/edit', blogId]">
            Edit
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  </section>
  `,
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {

  blogId: number = 0;
  blogDetails: Blog = {
    id: 0,
    title: '',
    content: '',
  };

  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.params['id'];
    this.LoadBlog();
  }

  LoadBlog() {
    this.blogService.getBlog(this.blogId)
    .subscribe({
      next: (data: any) => {
        this.blogDetails = data;
        // console.log(data);
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }

}
