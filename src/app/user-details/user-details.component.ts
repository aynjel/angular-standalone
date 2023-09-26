import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ user.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ user.email }}</h6>
      <p class="card-text">{{ user.company }}</p>
      <a [routerLink]="['/users', user.id]" class="card-link">View</a>
    </div>
  </div>
  `,
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  @Input() user!: any;

  constructor() { }

  ngOnInit(): void {
  }
}
