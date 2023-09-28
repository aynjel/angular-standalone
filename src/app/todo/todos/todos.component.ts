import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      todos works!
    </p>
  `,
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

}
