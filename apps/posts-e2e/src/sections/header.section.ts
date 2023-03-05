import { getFirstTag } from "../support/app.po";

export class HeaderSection{
  title = 'Page Header';

  checkTitle(){
    getFirstTag('#header').should('contain',this.title);
  }


}
