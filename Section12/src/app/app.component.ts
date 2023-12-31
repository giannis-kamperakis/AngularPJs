import { FormatWidth } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, NgForm, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: any;
  emailRegex: string = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" ;
  contactRegex: string = "[789][0-9]{9}"

  constructor(fb: FormBuilder){

    this.form = fb.group({
      fullName: ['', [
        Validators.required,
        Validators.minLength(5)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(this.emailRegex)
      ]],
      contactDetails: fb.group({
        address: ['',[
          Validators.required
        ]],
        shippingAddress: ['',[
          Validators.required
        ]],
        contactNo: ['',[
          Validators.required,
          Validators.pattern(this.contactRegex)
        ]]
      }),
      skills: fb.array([])
    })

    // this.form = new FormGroup({
    //   fullName: new FormControl('', [
    //     Validators.required,
    //     Validators.minLength(5)
    //   ]),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern(this.emailRegex)
    //   ]),
    //   contactDetails: new FormGroup({
    //     address: new FormControl('',[
    //       Validators.required
    //     ]),
    //     shippingAddress: new FormControl('',[
    //       Validators.required
    //     ]),
    //     contactNo: new FormControl('',[
    //       Validators.required,
    //       Validators.pattern(this.contactRegex)
    //     ])
    //   }),
    //   skills: new FormArray([])
    // });
  }

  get fullname(){
    return this.form.get('fullName');
  }

  get Email(){
    return this.form.get('email');
  }

  get Address(){
    return this.form.get('contactDetails.address');
  }

  get ShippingAddress(){
    return this.form.get('contactDetails.shippingAddress');
  }

  get Contact(){
    return this.form.get('contactDetails.contactNo');
  }

  get Skills(){
    return this.form.get('skills') as FormArray
  }

  onSubmit(){
    console.log(this.form.value);
  }

  addSkills(skills: HTMLInputElement){
    this.Skills.push(
      new FormControl(skills.value)
    )

    skills.value = '';
  }

  removeSkills(index: number){
    this.Skills.removeAt(index)
  }

  // get fc(){    I can access all controllers by this function then on the html i have to do the following fc.username.touched etc.
  //   return this.form.controls;
  // }
}
