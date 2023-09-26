import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-view',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      blog-view works!
    </p>
  `,
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent {

}
