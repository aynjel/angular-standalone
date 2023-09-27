import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      header works!
    </p>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

}
