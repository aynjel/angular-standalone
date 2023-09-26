import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable, map } from 'rxjs';
import { User, UserService } from '../service/user.service';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section>
    <h2>User</h2>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ (user | async)?.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ (user | async)?.email }}</h6>
        <p class="card-text">{{ (user | async)?.company }}</p>
      </div>
    </div>
  </section>
  `,
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent implements OnInit{  
  user!: Observable<User | undefined>;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.user = this.route.paramMap.pipe(map(params => {
      const id = Number(params.get('id'));
      return this.userService.users.find(user => user.id === id);
    }
    ));
  }
}
