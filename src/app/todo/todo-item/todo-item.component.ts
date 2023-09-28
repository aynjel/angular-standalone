import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      todo-item works!
    </p>
  `,
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {

}
