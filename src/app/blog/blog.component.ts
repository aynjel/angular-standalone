import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  template: `
  <section>
    <app-header></app-header>
    <router-outlet></router-outlet>
  </section>
  `,
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {

}
