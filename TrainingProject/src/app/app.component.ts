import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'TrainingProject';
  parentMessage:string = "Message coing from the parent component!!";
  messageFromChild:string = "";

  emittedMessageFromChild: string = "";

  @ViewChild(PostComponent) childComp: any; //Section 6 -The ViewDecorator needs the AfterViewInit class in order to play correctly

  imgURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/1200px-Google_Images_2015_logo.svg.png"
  boolFlag = false;
  userName = ""

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.messageFromChild = this.childComp.childMessage;
  }

  receiveMessage($event:any){
    this.emittedMessageFromChild = $event;
  }

  buttonClick(): void{
    console.log('Button click event worked');
        
  }

  onKeyup($event: any): void{
    if($event.keyCode == 13){
    console.log("Enter key pressed!");
    }
  }

  showTemplateVariable($event: any): void{
    if($event.keyCode == 13){
      console.log($event.target.value);
      }
  }

  onKeyupTwoWay(): void{
    console.log(this.userName);
  }

}
