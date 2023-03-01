import { NgClass } from '@angular/common';
import { Component,ElementRef,Input,Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'akur8-card',
  standalone: true,
  imports: [NgClass],
  template: `
  <div class="card" #card [ngClass]="{'red': selected}" (click)="cardClick.emit(item?.id)">
  {{item?.name}}
  </div>
`,
  styles: [`
  .card{
    width: 100%;
    border-radius: 5px;
    margin: 5px 0px;
    border: 1.5px solid black;
    cursor: pointer;
  }
  .red{
    border-color: red;
  }
`],
})
export class CardComponent {
  @Input() item: any;
  selected !: boolean;
  @ViewChild('card') card!: ElementRef;
  @Input() set selectedCard(value: boolean){
    this.selected = value;
    if(this.card)
     this.focus();
  }
  @Output() cardClick : EventEmitter<any> = new EventEmitter();

  focus(){
    this.card.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.card.nativeElement.focus();
  }
}
