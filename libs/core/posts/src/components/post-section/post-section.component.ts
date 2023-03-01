  import { Component, inject } from '@angular/core';
  import { PostService } from '../../services/post.service';
  import { PostListComponent } from '../post-list/post-list.component';
  import { FormComponent } from '../form/form.component';
  import { PostComponent } from '@akur8/shared/components';
  import { AsyncPipe, NgFor, NgIf } from '@angular/common';
  import { Post, PostId } from '../../interfaces/post.interface';
import { Subject, takeUntil } from 'rxjs';

  @Component({
    selector: 'akur8-post-section',
    standalone: true,
    imports: [PostListComponent,FormComponent,PostComponent,NgIf,NgFor,AsyncPipe],
    templateUrl: './post-section.component.html',
    styleUrls: ['./post-section.component.css'],
  })
  export class PostSectionComponent {
    postService = inject(PostService);
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
