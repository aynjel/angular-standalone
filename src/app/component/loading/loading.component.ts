import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from 'src/app/service/loading/loading.service';
import { MaterialModule } from 'src/material.module';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
  ],
  template: `
  <div *ngIf="(loader.isLoading$ | async)" class="spinner-overlay">
    <mat-spinner diameter="50"></mat-spinner>
  </div>
  `,
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoadingComponent {
  constructor(public loader: LoadingService) { }
}
