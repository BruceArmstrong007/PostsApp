import { TestBed } from '@angular/core/testing';
import { PostSectionComponent } from './post-section.component';
import { of } from 'rxjs';

describe(PostSectionComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(PostSectionComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })

  it('renders', () => {
    const eventData = of([
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
    cy.fixture('posts.json').then((data:any)=>{
     cy.mount(PostSectionComponent,{
      componentProperties : {
        posts$ : of(data),
        postEvents$ : eventData
      }
     });
    });
  })

})
