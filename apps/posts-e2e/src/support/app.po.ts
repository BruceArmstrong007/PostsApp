export const getFirstTag = (selector: string) => cy.get(selector).first().should('exist').should('be.visible');
export const getAllTag = (selector: string) => cy.get(selector).should('exist').should('be.visible');
