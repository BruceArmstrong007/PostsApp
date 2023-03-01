  import { Component, inject } from '@angular/core';
  import { PostsService } from '../../services/posts.service';
  import { PostListComponent } from '../post-list/post-list.component';
  import {FormComponent} from '../form/form.component';
  import {PostsComponent} from '../posts/posts.component';
  import { AsyncPipe, NgFor } from '@angular/common';
  import { Post, PostId } from '../../interfaces/post.interface';
import { Subject, takeUntil } from 'rxjs';

  @Component({
    selector: 'akur8-posts-section',
    standalone: true,
    imports: [PostListComponent,FormComponent,PostsComponent,NgFor,AsyncPipe],
    templateUrl: './posts-section.component.html',
    styleUrls: ['./posts-section.component.css'],
  })
  export class PostsSectionComponent {
    postService = inject(PostsService);
    posts$ = this.postService?.posts$.asObservable();
    postEvents$ = this.postService?.postEvents$.asObservable();
    destroy$ : Subject<any> = new Subject();
    selected !: string;

    ngOnInit(){
      this.postService?.selectedPost$.pipe(takeUntil(this.destroy$)).subscribe((selected:string)=> this.selected = selected);
    }

    cardClick(id:PostId){
      this.postService?.selectedPost(id);
    }

    deletePost(post:Post){
      if(window.confirm('Are you sure you want to delete this post?')){
        this.postService.removePost(post);
      }
    }


    ngOnDestroy(){
      this.destroy$.complete();
      this.destroy$.unsubscribe();
    }
  }
