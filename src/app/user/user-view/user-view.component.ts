import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      user-view works!
    </p>
  `,
  styleUrls: ['./user-view.component.scss']
})
export class UserViewComponent {

}
