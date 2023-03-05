import { TestBed } from '@angular/core/testing';
import { FormComponent } from './form.component';

describe(FormComponent.name, () => {

  beforeEach(() => {
    TestBed.overrideComponent(FormComponent, {
      add: {
        imports: [],
        providers: []
      }
    });
  })

  it('renders', () => {
    cy.mount(FormComponent);
  })


  it('form fields and buttons exist and visible', () => {
    cy.mount(FormComponent);
    cy.get('[formControlName="name"]').should('exist').should('be.visible');
    cy.get('[formControlName="content"]').should('exist').should('be.visible');
    cy.get('#save').should('exist').should('be.visible').should('have.attr','disabled');
    cy.get('#reset').should('exist').should('be.visible').should('have.attr','disabled');
  });

  it('form should save', () => {
    cy.mount(FormComponent);
    cy.get('[formControlName="name"]').type('Test Contents');
    cy.get('[formControlName="content"]').type('Test Contents');
    cy.get('#save').click().should('have.attr','disabled');
  });

  it('form should reset', () => {
    cy.mount(FormComponent);
    cy.get('[formControlName="name"]').type('Test Contents');
    cy.get('[formControlName="content"]').type('Test Contents');
    cy.get('#reset').click().should('have.attr','disabled');
  });

})
