import { TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { of } from 'rxjs';

describe(ListComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(ListComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })

  it('renders', () => {
    cy.fixture('posts.json').then((data:any)=>{
      cy.mount(ListComponent,{
        componentProperties:{
          data: of(data)
        }
      });
    });
  });


})
