import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  template: `
  <div class="header">
    <h2>Blog</h2>

    <button mat-raised-button [routerLink]="['/blog/create']">
      Create a new post
    </button>
  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor() {
    
  }

  ngOnInit(): void {
    
  }
  
}
