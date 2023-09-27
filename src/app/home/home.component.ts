import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../service/auth/auth.service';
import { Subscriber, Observable, interval, take, throttle, map } from 'rxjs';
import { ButtonComponent } from '../component/button/button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent
  ],
  template: `
  <section *ngIf="!isLoggedIn">
    <h1>Home</h1>
    <p>This is the home page</p>
  </section>
  <section *ngIf="isLoggedIn">
    <!-- <h2>Welcome {{userDetails.name}}</h2>
    <p>You are logged in as {{userDetails.email}}</p> -->
    <h2>
      {{display}}
    </h2>
    <app-button text="Click me" (click)="Observers()" type="button" color="red"></app-button>
  </section>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isLoggedIn: boolean;

  userDetails!: {
    id: number,
    name: string,
    email: string,
  };

  constructor(private authService: AuthService) {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.authService.getUserDetails().subscribe(
        (res: any) => {
          this.userDetails = res.data;
        },
        (err: any) => {
          console.log(err);
        }
      );
    }
  }

  observer = {
    next: (data: any) => console.log(data),
    error: (err: any) => console.log(err),
    complete: () => console.log('Completed')
  };

  display!: string;
  
  Observers() {
    const numbers = interval(1000);
    const takeFourNumbers = numbers.pipe(take(6));
    takeFourNumbers.subscribe(x => {
      this.display = x.toString();
      console.log('Next: ', x);
    });

    // const foo = new Observable((subscriber) => {
    //   console.log('Hello');
    //   subscriber.next(42);
    //   subscriber.next(100);
    //   subscriber.next(200);
    //   setTimeout(() => {
    //     subscriber.next(300); // happens asynchronously
    //   }, 1000);
    // });
    
    // console.log('before');
    // foo.subscribe((x) => {
    //   console.log(x);
    // });
    // console.log('after');
  }
}
