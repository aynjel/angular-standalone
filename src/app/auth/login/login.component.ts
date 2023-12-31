import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material.module';
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [AuthService],
  template: `
    <div class="container">
      <mat-card class="login-card">
        <mat-card-header>
          <mat-card-title class="login-card-title">Login</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
            <mat-form-field appearance="outline">
              <mat-label>Email</mat-label>
              <input matInput placeholder="Email" required formControlName="email">
            </mat-form-field>
            <mat-form-field appearance="outline">
              <mat-label>Password</mat-label>
              <input matInput [type]="hide ? 'password' : 'text'" required formControlName="password">
              <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'" [attr.aria-pressed]="hide">
                <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
              </button>
            </mat-form-field>
            <button mat-raised-button color="primary"type="submit">Login</button>
            <div class="bottom-link">
              <a [routerLink]="['/auth/register']">Don't have an account?</a>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) {
    if (this.authService.isLoggedIn()) {
      console.log('Already logged in');
      this.router.navigate(['/']);
    }
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value)
      .subscribe({
        next: (res: any) => {
          this.toastr.success(res.message, 'Success');
          this.router.navigate(['/']);
        },
        error: (err: HttpErrorResponse) => {
          this.toastr.error(err.error.message, 'Error');
        },
      });
      console.log(this.loginForm.value);
    } else {
      this.toastr.error('Please enter valid details', 'Error');
    }
  }
}
