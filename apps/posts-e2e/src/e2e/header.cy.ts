import { HeaderSection } from "../sections/header.section";

describe('Header Section', () => {
  beforeEach(() => cy.visit('/'));

  const header = new HeaderSection();

  it('Should display header text', () => {
    header.checkTitle();
  });

});
