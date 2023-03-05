import { getFirstTag } from "../support/app.po";

export class FooterSection{
  title = 'Page Footer';

  checkTitle(){
    getFirstTag('#footer').should('contain',this.title);
  }


}
