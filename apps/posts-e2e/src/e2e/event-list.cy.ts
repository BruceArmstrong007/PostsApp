import { EventListSection } from "../sections/event-list.section";

describe('Post Event List Section', () => {
  beforeEach(() => cy.fetchPostData());

  const eventList = new EventListSection();

  it('Should display title text', () => {
    eventList.checkTitle();
  });

  it('Should display on no events', () => {
    eventList.noData();
  });

});
