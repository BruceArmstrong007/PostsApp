import { TestBed } from '@angular/core/testing';
import { PostComponent } from './post.component';

describe(PostComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(PostComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })


  it('renders', () => {
    cy.fixture('post.json').then((data:any)=>{
      cy.mount(PostComponent,{
        componentProperties:{
          data: data
        }
      });
    });
  });


})
