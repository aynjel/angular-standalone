import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
  <div class="header">
    <h2>Blog</h2>

    <button routerLink="/blog/create">
      Create a new post
    </button>
  </div>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
