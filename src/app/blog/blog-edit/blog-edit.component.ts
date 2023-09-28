import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { BlogService } from 'src/app/service/blog/blog.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-edit',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  template: `
    <section>
    <form [formGroup]="editBlogForm" (ngSubmit)="onSubmit()">
      <div class="container">
        <mat-form-field appearance="outline">
          <mat-label>Title</mat-label>
          <input matInput placeholder="Title" formControlName="title">
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Content</mat-label>
          <textarea matInput placeholder="Content" formControlName="content"></textarea>
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit" [disabled]="!editBlogForm.valid">Edit</button>
        <div class="bottom-link">
          <a [routerLink]="['/blog', blogId]" class="back-link">Back</a>
        </div>
      </div>
    </form>
  </section>
  `,
  styleUrls: ['./blog-edit.component.scss']
})
export class BlogEditComponent implements OnInit {

  blogId: number = 0;

  editBlogForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  constructor(
    private toastr: ToastrService, 
    private router: Router, 
    private blogService: BlogService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.params['id'];
    this.blogService.getBlog(this.blogId).subscribe({
      next: data => {
        this.editBlogForm.setValue({
          title: data.title,
          content: data.content
        });
        console.log(data);
      },
      error: (err: HttpErrorResponse) => {
        this.toastr.error(err.message, 'Error');
        console.log(err);
      }
    });
  }

  onSubmit() {
    if (this.editBlogForm.valid) {
      const blog = {
        id: this.blogId,
        title: this.editBlogForm.value.title,
        content: this.editBlogForm.value.content
      };
      this.blogService.editBlog(blog).subscribe({
        next: data => {
          this.toastr.success('Blog edited successfully', 'Success');
          this.router.navigate(['/blog', this.blogId]);
          console.log(data);
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error(err.message, 'Error');
          console.log(err);
        }
      });
    }
  }

}
