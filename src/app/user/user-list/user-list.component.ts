import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService, User } from 'src/app/service/user/user.service';
import { UserCardComponent } from '../user-card/user-card.component';
import { MaterialModule } from 'src/material.module';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    CommonModule,
    UserCardComponent,
    MaterialModule
  ],
  template: `
    <section>
      <div class="container">
        <app-user-card *ngFor="let user of usersPerPage" [user]="user"></app-user-card>
        <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
      </div>
    </section>
  `,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  
  users: User[] = [];
  usersPerPage: User[] = [];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.LoadUsers();
  }

  LoadUsers(): void {
    this.userService.getUsers()
    .subscribe({
      next: users => {
        this.users = users;
        this.usersPerPage = this.users.reverse().slice(0, 3);
      },
      error: err => console.log(err)
    });
  }
}
