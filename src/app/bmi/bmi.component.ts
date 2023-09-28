import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bmi',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  template: `
  <section>
    <h1>BMI</h1>
    
    <form (ngSubmit)="onSubmit()" #bmiForm="ngForm">
      <input type="number" [(ngModel)]="feet" name="feet" placeholder="Enter feet" />
      <input type="number" [(ngModel)]="inch" name="inch" placeholder="Enter inch" />
      <br>
      <input type="number" [(ngModel)]="pounds" name="pounds" placeholder="Enter pounds" />
      <p *ngIf="feet && inch">
        {{feet}} feet {{inch}} inch
      </p>
      <p *ngIf="pounds">
        {{pounds}} kg
      </p>
      <p *ngIf="result">
        {{result}}
      </p>
      <br>
      <button type="submit" [disabled]="!bmiForm.valid">Submit</button>
    </form>
  </section>
  `,
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent {

  feet!: number;
  inch!: number;
  pounds!: number;
  result!: string;

  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
    if (this.feet && this.inch && this.pounds) {
      const calcHieght = (this.feet * 12) + this.inch;
      const calcResult = (this.pounds / (calcHieght * calcHieght)) * 703;
      this.result = calcResult.toFixed(2) + ' kg/m2';
    }else{
      this.result = 'Please enter all fields';
    }
  }
}
