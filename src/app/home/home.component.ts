import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section *ngIf="!isLoggedIn">
    <h1>Home</h1>
    <p>This is the home page</p>
  </section>
  <section *ngIf="isLoggedIn">
    <h2>Welcome {{userDetails.name}}</h2>
    <p>You are logged in as {{userDetails.email}}</p>
  </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  userDetails!: {
    id: number,
    name: string,
    email: string,
  };

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.authService.getUserDetails().subscribe(
        (res: any) => {
          this.userDetails = res.data;
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }
}
