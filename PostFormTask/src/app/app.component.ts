import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  postTitle: string = "";
  postDetail: string = "";
  postImageURL: string = "";
  postURL: string = "";
  postURLText: string = "";
  addBackground: boolean = false;

  constructor(){

  }

  showMessage(): void{
    console.log("this.postURL.length");
    
    if(this.postURL.length > 0){
      this.postURLText = "More details";
    }
  }

  turnYellow(): void{
    
  }

}
