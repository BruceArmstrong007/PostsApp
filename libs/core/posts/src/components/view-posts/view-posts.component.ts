import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { PostComponent } from '@akur8/shared/components';
import { Observable } from 'rxjs';


@Component({
  selector: 'akur8-view-posts',
  standalone: true,
  imports: [PostComponent, AsyncPipe, NgFor, NgIf],
  template: `
  <div class="title">
    Posts detail list
  </div>
  <div class="posts">
    <div class="center" *ngFor="let item of posts | async">
    <akur8-post (cardClick)="cardClick.emit($event)" (deleteClick)="deleteClick.emit($event)" [selectedPost]="selected && selected === item?.id ?true:false" [data]="item"/>
    </div>
    <div *ngIf="(posts | async)?.length === 0" class="center">
      No data available
    </div>
  </div>
  `,
  styles: [`
  .title{
    font-weight: bold;
    text-align: center;
    padding-bottom: 15px;
  }
  .posts{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
  }
 `],
})
export class ViewPostsComponent {
  @Input() selected !: string;
  @Input() posts !: Observable<any>;
  @Output() cardClick: EventEmitter<any> = new EventEmitter();
  @Output() deleteClick: EventEmitter<any> = new EventEmitter();
}
