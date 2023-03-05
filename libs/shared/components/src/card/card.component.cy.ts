import { TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Post } from '@akur8/core/posts';

describe(CardComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(CardComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })

  it('renders', () => {
    cy.fixture('post.json').then((data:any)=>{
      cy.mount(CardComponent,{
        componentProperties:{
          item: data
        }
      });
    });
  });

})
