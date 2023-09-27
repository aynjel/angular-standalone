import { Component } from '@angular/core';
import { AuthService } from './service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  <header>
    <nav>
      <a [routerLink]="['/']">
        Home
      </a>

      <ul *ngIf="isLoggedIn">
        <li>
          <a [routerLink]="['/users']" class="nav-link">
            Users
          </a>
        </li>
        <li>
          <a [routerLink]="['/blog']" class="nav-link">
            Blog
          </a>
        </li>
      </ul>

      <ul *ngIf="!isLoggedIn">
        <li>
          <a [routerLink]="['/auth/login']" class="nav-link">
            Login
          </a>
        </li>
        <li>
          <a [routerLink]="['/auth/register']" class="nav-link">
            Register
          </a>
        </li>
      </ul>

      <ul *ngIf="isLoggedIn">
        <li>
          <button routerLink="/auth/profile" class="nav-link">
            Profile
          </button>
        </li>
        <li>
          <button (click)="OnLogout()" class="nav-link">
            Logout
          </button>
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
  title = 'angular-auth';

  isLoggedIn: boolean;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  OnLogout() {
    this.authService.logout().subscribe(
      (res: any) => {
        this.isLoggedIn = false;
        this.toastr.success('Logout successful');
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  OnProfile() {
    this.router.navigate(['/auth/profile']);
  }
}
