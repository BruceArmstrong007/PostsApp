import { findFirstTag, getAllTag, getFirstTag } from "../support/app.po";

interface Post {
  name : string;
  content : string;
}

export class MainPostSection{
  title = "Posts detail list";
  formTitle = "Create a new post";

  createPost(){
    this.enterFormData().then(()=>{
      getFirstTag("#save").click();
    })
  }

  clearPost(){
    this.enterFormData().then(()=>{
      getFirstTag("#reset").click();
    })
  }

  enterFormData(){
    return cy.fixture('post').then((data:Post )=>{
      getFirstTag("#name").clear().type(data?.name);
      getFirstTag("#content").clear().type(data?.content);
    });
  }

  checkTitle(){
    getFirstTag("akur8-view-posts div.title").and('contain',this.title);
  }

  checkFormTitle(){
    getFirstTag("akur8-form form div.title").and('contain',this.formTitle);
  }

  noData(){
    getFirstTag("akur8-view-posts div.posts div.center").contains('No data available');
  }

  getCards(){
    return getAllTag("akur8-view-posts div.posts div.center akur8-post");
  }

  close(id : string){
    return getFirstTag("#"+id).find("div.card div.titleWrapper div.close");
  }


}
