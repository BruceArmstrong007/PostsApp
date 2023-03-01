import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, inject } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'akur8-posts',
  standalone: true,
  imports: [NgClass],
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
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
