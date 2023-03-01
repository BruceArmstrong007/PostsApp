import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'akur8-posts',
  standalone: true,
  imports: [NgClass],
  template: `
  <div class="card" #post [ngClass]="{'red': selected}" (click)="cardClick.emit(data?.id)">
    <div class="titleWrapper">
      <div class="title">{{data?.name}}</div>
      <div class="close" (click)="deleteClick.emit(data)">X</div>
    </div>
    <div class="description">
      {{data?.content}}
    </div>
  </div>
`,
  styles: [`
  .card{
    width: 300px;
    height: 200px;
    overflow: hidden;
    display: flex;
    flex-flow: column;
    border-radius: 5px;
    border: 1.5px solid black;
    cursor: pointer;
  }
  .titleWrapper{
    display: flex;
    justify-content: space-between;
    flex: 0 1 auto;
  }
  .title,.close{
    padding: 10px;
    font-weight: bold;
  }
  .description{
    padding: 10px;
    overflow-y: hidden;
    flex: 0 1 auto;
  }
  .description:hover, .description:active{
    overflow-y: auto;
  }
  .red{
    border-color: red;
  }
`],
})
export class PostComponent {
  @Input() data!:any;
  selected !: boolean;
  @Input() set selectedPost(value: boolean){
    this.selected = value;
    if(this.post){
      setTimeout(() => this.focus(),10)
    }
  }
  @ViewChild('post') post!: ElementRef;
  @Output() cardClick : EventEmitter<any> = new EventEmitter();
  @Output() deleteClick : EventEmitter<any> = new EventEmitter();


  focus(){
    this.post.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    this.post.nativeElement.focus();
  }
}
