import { TestBed } from '@angular/core/testing';
import { PostListComponent } from './post-list.component';
import { of } from 'rxjs';

describe(PostListComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(PostListComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })

  it('renders', () => {
     cy.mount(PostListComponent, {
           componentProperties: {
               type:  '',
          }
       });
  })


  it('should display Post list',()=>{
    cy.fixture('posts.json').then((data:any)=>{
     cy.mount(PostListComponent, {
      componentProperties: {
          type:  'Post',
          data: of(data),
          filter: ''
     }
  });
    })
  })

  it('should display Post event list',()=>{
   const data = of([
      {
        name : 'My first post was removed on Sun, 05 Mar 2023 09:29:07 GMT'
      },
      {
        name : 'A little bit of sunshine ? was removed on Sun, 05 Mar 2023 09:29:10 GMT'
      },
      {
        name : 'A little bit of sunshine ? was removed on Sun, 05 Mar 2023 09:29:15 GMT'
      },
      {
        name : 'Bruce Armstrong was added on Sun, 05 Mar 2023 09:29:56 GMT'
      },
      {
        name : 'sadasdasdcv was added on Sun, 05 Mar 2023 09:29:58 GMT'
      }
    ]);
    cy.mount(PostListComponent, {
      componentProperties: {
          type:  'Post event',
          data: data,
          filter: ''
     }
    });
  })
})
