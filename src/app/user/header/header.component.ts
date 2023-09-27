import { Component } from '@angular/core';
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
    <h2>User</h2>

    <button routerLink="/users/create" mat-raised-button>
      Create a new user
    </button>
  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
