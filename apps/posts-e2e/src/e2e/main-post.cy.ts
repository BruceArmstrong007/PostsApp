import { MainPostSection } from "../sections/main-post.section";

describe('Main Post Section', () => {
  beforeEach(() => cy.fetchPostData());

  const mainPost = new MainPostSection();

  it('Should should have form title',()=>{
    mainPost.checkFormTitle();
  });

  it('Should have input fields and type in them',()=>{
    mainPost.enterFormData();
  });

  it('Should create new post',()=>{
    mainPost.createPost();
  });

  it('Should should reset the input fields',()=>{
    mainPost.clearPost();
  });

  it('Should check for posts title',()=>{
    mainPost.checkTitle();
  });

  it('Should display the fetched posts list', () => {
    mainPost.getCards().should('have.length.at.least', 1);
  });

  it('Should click and check for selected post', () => {
    const cards = mainPost.getCards();
    cards.last().click();
    cards.last().children("div.card").should('have.attr','class','card red');
  });

});
