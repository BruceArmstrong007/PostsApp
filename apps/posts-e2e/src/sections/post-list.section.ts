import { getFirstTag, getAllTag } from "../support/app.po";

export class PostListSection{
  title = 'Post list';

  checkTitle(){
    getFirstTag("div.left akur8-post-list div.style div.heading div.title").and('contain',this.title);
  }

  checkInput(textText = 'Testing 1'){
    getFirstTag("div.left akur8-post-list div.style div.heading input").clear().type(textText);
  }

  getCards(){
    return getAllTag("div.left akur8-post-list div.style akur8-list akur8-card");
  }

  noData(){
    getAllTag("div.left akur8-post-list div.style akur8-list").contains('No data available');
  }

  filterPost(filterText = 'A little bit of sunshine ?'){
    this.checkInput(filterText);
    this.getCards().its('length').then((length:number) => cy.log(length.toString()));
  }


}
