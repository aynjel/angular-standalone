import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/service/auth/auth.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  template: `
  <section>
    <mat-card class="profile-card">
      <mat-card-header>
        <mat-card-title>Profile</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <button mat-raised-button color="primary" routerLink="/auth/profile/edit">Edit Profile</button>
        <p>Name: {{userDetails.name}}</p>
        <p>Email: {{userDetails.email}}</p>
        <p>Education: {{userDetails.education}}</p>
        <button mat-raised-button color="warn" (click)="OnLogout()">Logout</button>
      </mat-card-content>
    </mat-card>
  </section>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  userDetails = {
    email: '',
    name: '',
    education: '',
  };
  
  constructor(private authService: AuthService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUserDetails().subscribe(
      (res: any) => {
        this.userDetails = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  OnLogout() {
    this.authService.logout().subscribe(
      (res: any) => {
        console.log(res);
        this.toastr.success('Logout successful');
        this.router.navigate(['/']);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
