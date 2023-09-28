import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ButtonComponent
  ],
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
          <li>
            <a [routerLink]="['/todos']" class="nav-link">
              Todo
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <app-button [text]="isLoggedIn ? 'Profile' : 'Register'" (btnClick)="isLoggedIn ? OnProfile() : GotoRegister()"></app-button>
          </li>
          <li>
            <app-button [text]="isLoggedIn ? 'Logout' : 'Login'" (btnClick)="isLoggedIn ? OnLogout() : GotoLogin()"></app-button>
          </li>
        </ul>
      </nav>
    </header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  isLoggedIn: boolean;

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  OnLogout() {
    this.authService.logout().subscribe({
      next: (res: any) => {
        this.toastr.success(res.message, 'Success');
        this.isLoggedIn = false;
        this.router.navigate(['/auth/login']);
      },
      error: (err: any) => {
        this.toastr.error(err.message, 'Error');
      }
    });
  }

  GotoLogin() {
    this.router.navigate(['/auth/login']);
  }

  GotoRegister() {
    this.router.navigate(['/auth/register']);
  }

  OnProfile() {
    this.router.navigate(['/auth/profile']);
  }
}
