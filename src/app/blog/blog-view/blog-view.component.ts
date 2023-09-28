import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { Blog, BlogService } from 'src/app/service/blog/blog.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";

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
          <button mat-raised-button color="primary" [routerLink]="['/blog/edit', blogId]">
            Edit
          </button>
          <button mat-raised-button color="warn" (click)="deleteBlog()">
            Delete
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

  constructor(private toastr: ToastrService, private router: Router, private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.params['id'];
    this.LoadBlog();
  }

  LoadBlog() {
    this.blogService.getBlog(this.blogId)
    .subscribe({
      next: (data: any) => {
        this.blogDetails = data;
        console.log(data);
      },
      error: (err: any) => {
        this.toastr.error(err.message, 'Error');
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }

  deleteBlog() {
    this.blogService.deleteBlog(this.blogId)
    .subscribe({
      next: (data: any) => {
        this.toastr.success('Blog deleted successfully', 'Success');
        this.router.navigate(['/blog']);
        console.log(data);
      },
      error: (err: any) => {
        this.toastr.error(err.message, 'Error');
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      }
    });
  }

}
