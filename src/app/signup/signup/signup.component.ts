import { SignIn } from './../../models/sign-in';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupmodel = new SignIn();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: any){
    form.submitted = true;
    console.log('This is Form', this.signupmodel, form);
    
  }
  

}
