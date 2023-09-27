import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog } from 'src/app/service/blog/blog.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  template: `
  <mat-card class="blog-card">
    <mat-card-header>
      <mat-card-title>{{blog.title}}</mat-card-title>
    </mat-card-header>
    <mat-card-content (click)="showFullContent()">
      <p>{{blog.content}}</p>
    </mat-card-content>
    <mat-card-actions>
      <button mat-raised-button color="primary" [routerLink]="['/blog', blog.id]">
        Read More
      </button>
    </mat-card-actions>
  </mat-card>
  `,
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {

  @Input() blog: Blog = {
    id: 0,
    title: '',
    content: '',
  };

  fullContent: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.fullContent = this.blog.content;
    this.blog.content = (this.blog.content.length > 50) ? this.blog.content.substring(0, 50) + '...' : this.blog.content;
  }

  showFullContent(): void {
    this.blog.content = this.fullContent;
  }

}
