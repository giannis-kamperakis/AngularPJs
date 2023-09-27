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

  @ViewChild(PostComponent) childComp: any;

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.messageFromChild = this.childComp.childMessage;
  }

  receiveMessage($event:any){
    this.emittedMessageFromChild = $event;
  }

}
