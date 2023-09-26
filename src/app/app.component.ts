import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <header>
    <nav>
      <a [routerLink]="['/']">
        Home
      </a>

      <ul>
        <li>
          <a [routerLink]="['/users']">
            Users
          </a>
        </li>
        <li>
          <a [routerLink]="['/blog']">
            Blog
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a [routerLink]="['/profile']">
            Profile
          </a>
        </li>
        <li>
          <a [routerLink]="['/auth/login']">
            Login
          </a>
        </li>
        <li>
          <a [routerLink]="['/auth/register']">
            Register
          </a>
        </li>
        <li>
          <a [routerLink]="['/logout']">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  </header>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-standalone';
}
