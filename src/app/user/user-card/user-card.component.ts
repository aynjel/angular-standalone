import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/service/user/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ],
  template: `
    <mat-card class="user-card">
      <mat-card-header>
        <mat-card-title>{{user.name}}</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <p>{{user.email}}</p>
      </mat-card-content>
      <mat-card-actions>
        <button mat-raised-button color="primary" [routerLink]="['/user', user.id]">
          Read More
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit{

  @Input() user: User = {
    id: 0,
    name: '',
    email: '',
    password: '',
    education: '',
    dob: '',
    gender: '',
    company: '',
    role: '',
    status: ''
  };


  constructor() { }

  ngOnInit(): void {
  }
}