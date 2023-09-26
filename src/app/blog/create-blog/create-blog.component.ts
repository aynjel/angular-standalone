import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      create-blog works!
    </p>
  `,
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent {

}
