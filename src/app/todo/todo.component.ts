import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  template: `
  <input [(ngModel)]="todo" placeholder="Enter todo" />
  <p>
    {{todo}}
  </p>
  `,
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todo: string = '';
}
