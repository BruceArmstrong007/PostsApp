import { TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe(FooterComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(FooterComponent, {
      add: {
        imports: [],
        providers: []
      }
    })
  })

  it('renders', () => {
     cy.mount(FooterComponent);
  });

  it('Should exist',() => {
    cy.mount(FooterComponent);
    cy.get('h2#footer').should('exist').should('be.visible');
  });

  it('Should match',() => {
    cy.mount(FooterComponent);
    cy.get('h2#footer').should('contain','Page footer');
  });

})
