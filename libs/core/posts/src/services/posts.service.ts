import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post, PostId } from '../interfaces/post.interface';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts$ : BehaviorSubject<any> = new BehaviorSubject([]);
  postEvents$ : BehaviorSubject<any> = new BehaviorSubject([]);
  selectedPost$ : BehaviorSubject<PostId | any>  = new BehaviorSubject('');


  addPost(post: Post){
    this.posts$.next([...this.posts$.value,post]);
    this.addPostEvents([{
      name : post?.name + ' was added on ' + new Date().toUTCString()
    }]);
  }

  loadPosts(posts: Post[]){
    this.posts$.next([...this.posts$.value,...posts]);
  }


  removePost(post: Post){
    console.log(post);

    this.posts$.next([...this.posts$.value.filter((item: any) => item?.id !== post?.id)]);

    this.addPostEvents([{
      name : post?.name + ' was removed on ' + new Date().toUTCString()
    }]);
  }

  selectedPost(id: PostId){
    this.selectedPost$.next(id);
  }

  addPostEvents(postEvents: Pick<Post,'name'>[]){
    this.postEvents$.next([...this.postEvents$.value,...postEvents]);
  }



}
