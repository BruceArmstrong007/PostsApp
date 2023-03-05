import { TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe(HeaderComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(HeaderComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })

  it('renders', () => {
     cy.mount(HeaderComponent,);
  });

  it('Should exist',() => {
    cy.mount(HeaderComponent);
    cy.get('h2#header').should('exist').should('be.visible');
  });

  it('Should match',() => {
    cy.mount(HeaderComponent);
    cy.get('h2#header').should('contain','Page Header');
  });

})
