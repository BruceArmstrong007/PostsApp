import { RouterOutlet } from '@angular/router';
import { Component, inject } from '@angular/core';
import { PostService } from '@akur8/core/posts';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

@Component({
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
  selector: 'akur8-root',
  template: ` <router-outlet/> `,
  styles: [],
})
export class AppComponent {
  postService = inject(PostService);
  http = inject(HttpClient);

  ngOnInit(){
    this.http.get('/assets/posts.json').subscribe((res:any)=>{
      this.postService.loadPosts(res);
    })
  }

}
