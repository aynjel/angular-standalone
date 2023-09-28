import { Component } from '@angular/core';
import { UIService } from './service/UI/ui.service';

@Component({
  selector: 'app-root',
  template: `
    
    <app-header></app-header>
    
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';

  

  isLoading: boolean = false;

  constructor(public uiService: UIService) {

  }

  ngOnInit() {
    this.uiService.loading$.subscribe({
      next: (res: boolean) => {
        this.isLoading = res;
      }
    });
  }

  
}
