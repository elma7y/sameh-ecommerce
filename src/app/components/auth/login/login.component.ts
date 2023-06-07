import { ThemesService } from 'src/app/services/themes.service';
import { AuthService } from './../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, DoCheck, inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, DoCheck {
  usernamevalidmsg: string;
  passwordvalidmsg: string;
  uservalidstyle: string;
  passwordvalidstyle: string;

  //show/hide password
  showpass: boolean;
  //login form group
  login: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });

  constructor(private auth: AuthService) {
    this.showpass = false;
    //validation msgs
    this.usernamevalidmsg = 'username is required*';
    this.passwordvalidmsg = 'password is required*';
    //validation styles
    this.uservalidstyle = 'black';
    this.passwordvalidstyle = 'black';
  }
  ngDoCheck(): void {
    //username validation
    if (
      this.login.controls['username'].touched &&
      this.login.controls['username'].dirty
    ) {
      this.uservalidstyle = 'red';
      this.usernamevalidmsg = 'username must be at least 5 characters';
      if (this.login.controls['username'].valid) {
        this.uservalidstyle = 'green';
        this.usernamevalidmsg = 'username is valid';
      }
      if (this.login.controls['username'].value == '') {
        this.usernamevalidmsg = 'username is required*';
        this.uservalidstyle = 'black';
      }
    }
    //password validation
    if (
      this.login.controls['password'].touched &&
      this.login.controls['password'].dirty
    ) {
      this.passwordvalidstyle = 'red';
      this.passwordvalidmsg = 'password must be at least 8 characters';
      if (this.login.controls['password'].valid) {
        this.passwordvalidstyle = 'green';
        this.passwordvalidmsg = 'password is valid';
      }
      if (this.login.controls['password'].value == '') {
        this.passwordvalidmsg = 'password is required*';
        this.passwordvalidstyle = 'black';
      }
    }
  }

  ngOnInit(): void {}

  submit() {
    this.auth.loginusername = this.login.controls['username'].value;
    this.auth.loginpassword = this.login.controls['password'].value;
    this.auth.login();
  }
}
