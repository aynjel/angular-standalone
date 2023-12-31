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

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  template: `
  <section>
    <form [formGroup]="createBlogForm" (ngSubmit)="onSubmit()">
      <div class="container">
        <mat-form-field appearance="outline">
          <mat-label>Title</mat-label>
          <input matInput placeholder="Title" formControlName="title">
        </mat-form-field>
        <mat-form-field appearance="outline">
          <mat-label>Content</mat-label>
          <textarea matInput placeholder="Content" formControlName="content"></textarea>
        </mat-form-field>
        <button mat-raised-button color="primary" type="submit">Create</button>
        <div class="bottom-link">
          <a [routerLink]="['/blog']" class="back-link">Back</a>
        </div>
      </div>
    </form>
  </section>
  `,
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {

  createBlogForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    content: new FormControl('', Validators.required)
  });

  constructor(private toastr: ToastrService, private router: Router, private blogService: BlogService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.createBlogForm.valid) {
      this.blogService.createBlog(this.createBlogForm.value).subscribe({
        next: (res: any) => {
          this.toastr.success(res.messsage, 'Success');
          this.router.navigate(['/blog']);
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error(err.message, 'Error');
        }
      });
    } else {
      this.toastr.error('Please enter valid details', 'Error');
    }
  }

}
