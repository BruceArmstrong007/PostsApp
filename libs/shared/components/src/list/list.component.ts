import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { CardComponent } from '../card/card.component';
import { FilterPipe } from '@akur8/shared/services';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'akur8-list',
  standalone: true,
  imports: [NgFor,AsyncPipe,CardComponent,FilterPipe,NgIf],
  template: `
    <akur8-card [selectedCard]="(selectedPost && selectedPost === item?.id)?true:false" *ngFor="let item of (data | async | nameFilter : filter)" [item]="item" (cardClick)="cardClick.emit($event)"></akur8-card>
    <ng-container *ngIf="(data | async | nameFilter : filter).length === 0">
      <div class="center">
        No data available
      </div>
    </ng-container>
  `,
  styles: [` `],
})
export class ListComponent {
  @Input() filter!: string;
  @Input() data!: Observable<any>;
  @Input() selectedPost!: string | undefined;
  @Output() cardClick: EventEmitter<any> = new EventEmitter();

}
