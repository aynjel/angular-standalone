import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button [type]="type" [ngStyle]="{'background-color': color}" (click)="OnClick()">
    {{text}}
  </button>
  `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit{

  @Input() text: string = '';
  @Input() type: string = '';
  @Input() color: string = '';
  @Output() btnClick = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }

  OnClick(){
    this.btnClick.emit();
  }

}
