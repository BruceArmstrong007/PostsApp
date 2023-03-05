import { TestBed } from '@angular/core/testing';
import { ViewPostsComponent } from './view-posts.component';
import { of } from 'rxjs';

describe(ViewPostsComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(ViewPostsComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })

  it('renders', () => {
    cy.fixture('posts.json').then((data:any)=>{
     cy.mount(ViewPostsComponent, {
           componentProperties: {
            posts:  of(data),
          }
       });
      });
  })

})
