import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  template: `
  <section>
    <app-header></app-header>
    <router-outlet></router-outlet>
  </section>
  `,
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

}
