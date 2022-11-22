import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginmodel = new Login()
  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onLogin(form: any) {
    if (this.loginmodel.username == "test@gmail.com" && this.loginmodel.password == "test@123") {
      this.router.navigateByUrl ('/home')
    }

  }
}
