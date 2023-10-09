import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }

  onSubmit(f: NgForm){
    console.log(f.value);
  }

  getValue(f: NgModel){
    console.log(f);
  }
}

