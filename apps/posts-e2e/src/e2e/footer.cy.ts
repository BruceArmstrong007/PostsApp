import { FooterSection } from "../sections/footer.section";

describe('Footer Section',()=>{
  beforeEach(()=> cy.visit('/'));

  const footer = new FooterSection();

  it('Should display footer text',()=>{
    footer.checkTitle();
  });

});
