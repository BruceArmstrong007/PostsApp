import { getAllTag, getFirstTag } from "../support/app.po";

export class EventListSection{
  title = 'Post event list';

  checkTitle(){
    getFirstTag("div.right akur8-post-list div.style div.heading div.title").and('contain',this.title);
  }

  getCards(){
    return getAllTag("div.right akur8-post-list div.style akur8-list akur8-card");
  }

  noData(){
    getFirstTag("div.right akur8-post-list div.style akur8-list").contains('No data available');
  }

}
