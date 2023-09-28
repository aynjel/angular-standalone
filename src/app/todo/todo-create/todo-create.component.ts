import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-create',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      todo-create works!
    </p>
  `,
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent {

}
