import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserDetailsComponent],
  template: `
  <section>
    <h2>Users</h2>
    <ul>
      <li *ngFor="let user of userService.users">
        <app-user-details [user]="user"></app-user-details>
      </li>
    </ul>
  </section>
  `,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  constructor(readonly userService: UserService) {}
  
  ngOnInit(): void { }

  // GetUsers(): any {
    
  // }
}
