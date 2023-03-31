import { ListComponent } from '@akur8/shared/components';
import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { EventEmitter,Output,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'akur8-post-list',
  standalone: true,
  imports: [FormsModule,ListComponent,NgClass,NgIf],
  template: `
  <div class="style" [ngClass]="{'postColor' : type === 'Post','eventColor' : type === 'Post event'}">
    <div class="heading">
      <div class="title">{{type + ' '}}list</div>
      <input *ngIf="type === 'Post'" type="text" class="input" [placeholder]="'Filter ' + type" [(ngModel)]="filter">
    </div>
    <div class="scroller">
      <div class="cards">
        <akur8-list [filter]="filter" [selectedPost]="selectedPost" [data]="data" (cardClick)="cardClick.emit($event)"/>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .style{
    padding: 5px 15px;
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-flow: column;
  }
  .heading{
  flex: 0 1 auto;
  }
  .scroller{
    overflow-y: auto;
    flex: 1 1 auto;
  }
  .title{
    padding: 5px;
    font-weight: bold;
  }
  .input{
    width: 100%;
    margin: 5px 0px;
  }
  .postColor{
    background-color:  yellow;
  }
  .eventColor{
    background-color:  pink;
  }
  .cards{
    padding: 5px;
    width: 100%;
    height: 100%;
  }
`],
})
export class PostListComponent {
  @Input() type!: string;
  @Input() data!: Observable<any[]>;
  @Input() selectedPost: string | undefined;
  filter!: string;
  @Output() cardClick: EventEmitter<any> = new EventEmitter();

}
