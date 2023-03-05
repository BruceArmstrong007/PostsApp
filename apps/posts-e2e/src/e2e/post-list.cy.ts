import { PostListSection } from "../sections/post-list.section";

describe('Post List Section', () => {
  beforeEach(() => cy.fetchPostData());

  const postList = new PostListSection();

  it('Should display title text', () => {
    postList.checkTitle();
  });

  it('Should display the fetched posts list', () => {
    postList.getCards().should('have.length.at.least', 1);
  });

  it('Should display filter input with no data', () => {
    postList.checkInput();
    postList.noData();
  });

  it('Should filter posts', () => {
    postList.filterPost('My first post');
  });

  it('Should click and check for selected filtered post', () => {
    postList.filterPost();
    const cards = postList.getCards();
    cards.last().click();
    cards.last().children("div.card").should('have.attr','class','card red');
  });

});
