import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../Services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  title = "List of Posts"
  postList = "This is a message from the parent to the postList component!!!@@@!!"

  childMessage = "This is a message from your child!"
  
  @Input() fromParent:string | undefined;

  outputChildMessage = "Emitted message from your child! How dare you leave m.....!"
  @Output() messageEvent = new EventEmitter<string>;

  posts: Array<any>;

  constructor(private postService: PostService) { // DI example
    //let postService = new PostService()
    this.posts = postService.postList 
  }

  ngOnInit(): void {

  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
  }

  addNewData(){
    let newPost: Post = {
      id: 7,
      postTitle: "Post 7"}
    //this.postService.add
  }

}
