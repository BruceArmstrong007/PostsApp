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
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  @Input() type!: string;
  @Input() data!: Observable<any[]>;
  @Input() selectedPost: string | undefined;

  filter!: string;
  @Output() cardClick: EventEmitter<any> = new EventEmitter();

}
