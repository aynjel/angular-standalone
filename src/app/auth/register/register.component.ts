import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from "@angular/material/radio";
import { AuthService } from 'src/app/service/auth/auth.service';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    ReactiveFormsModule,
    RouterModule
  ],
  template: `
    <div class="container">
      <mat-card class="register-card">
        <mat-card-header>
          <mat-card-title class="register-card-title">
            Register
          </mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
            <div class="form-field">
              <mat-form-field appearance="outline">
                <mat-label>Name</mat-label>
                <input matInput placeholder="Name" required formControlName="name">
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Email</mat-label>
                <input matInput placeholder="Email" required formControlName="email">
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Password</mat-label>
                <input matInput [type]="hide ? 'password' : 'text'" required formControlName="password">
                <button mat-icon-button matSuffix (click)="hide = !hide" [attr.aria-label]="'Hide password'">
                  <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
                </button>
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Education</mat-label>
                <mat-select required formControlName="education">
                  <mat-option *ngFor="let education of educations" [value]="education.value">
                    {{education.viewValue}}
                  </mat-option>
                </mat-select>
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Company</mat-label>
                <input matInput placeholder="Company" required formControlName="company">
              </mat-form-field>
              <mat-form-field appearance="outline">
                <mat-label>Date of Birth</mat-label>
                <input matInput [matDatepicker]="picker" required formControlName="dob">
                <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                <mat-datepicker #picker></mat-datepicker>
              </mat-form-field>
              <mat-radio-group aria-label="Select an option">
                <mat-radio-button value="Male">Male</mat-radio-button>
                <mat-radio-button value="Female">Female</mat-radio-button>
              </mat-radio-group>
            </div>
            <button mat-raised-button color="primary"type="submit">
              Register
            </button>
            <div class="bottom-link">
              <a [routerLink]="['/auth/login']">Already have an account?</a>
            </div>
          </form>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  hide = true;
  educations = [
    {value: 'primary', viewValue: 'Primary'},
    {value: 'secondary', viewValue: 'Secondary'},
    {value: 'tertiary', viewValue: 'Tertiary'}
  ];

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    education: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    dob: new FormControl('', Validators.required)
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onSubmit() {
    // this.authService.register(this.registerForm.value);
  }
}
