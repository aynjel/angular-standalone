import { Component } from '@angular/core';
import { UIService } from './service/UI/ui.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  template: `
    <fa-icon [icon]="faCoffee"></fa-icon>
    <!-- <app-header></app-header>
    
    <main>
      <router-outlet></router-outlet>
    </main> -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-auth';

  faCoffee = faCoffee;

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
