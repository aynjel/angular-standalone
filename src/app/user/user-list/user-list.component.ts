import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      user-list works!
    </p>
  `,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

}