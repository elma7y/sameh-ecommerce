import { ThemesService } from 'src/app/services/themes.service';
import { AuthService } from './../../../services/auth.service';
import { Component, DoCheck, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, DoCheck {
  showpass: boolean;
  showpassconfirm: boolean;
  usernamevalidmsg: string;
  passwordvalidmsg: string;
  confrimpassmsg: string;
  emailvalidmsg: string;
  uservalidstyle: string;
  passwordvalidstyle: string;
  confirmpassstyle: string;
  emailvalidstyle: string;

  register: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    confirmpassword: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  constructor(private auth: AuthService) {
    //show hide password
    this.showpass = false;
    this.showpassconfirm = false;
    //validation msgs
    this.usernamevalidmsg = 'username is required*';
    this.passwordvalidmsg = 'password is required*';
    this.confrimpassmsg = 'confrim your password';
    this.emailvalidmsg = 'email is required*';
    //validation styles
    this.uservalidstyle = 'black';
    this.passwordvalidstyle = 'black';
    this.emailvalidstyle = 'black';
    this.confirmpassstyle = 'black';
  }
  ngDoCheck(): void {
    //username validation
    if (
      this.register.controls['username'].touched &&
      this.register.controls['username'].dirty
    ) {
      this.uservalidstyle = 'red';
      this.usernamevalidmsg = 'username must be at least 5 characters';
      if (this.register.controls['username'].valid) {
        this.uservalidstyle = 'green';
        this.usernamevalidmsg = 'username is valid';
      }
      if (this.register.controls['username'].value == '') {
        this.usernamevalidmsg = 'username is required*';
        this.uservalidstyle = 'black';
      }
    }
    //password validation
    if (
      this.register.controls['password'].touched &&
      this.register.controls['password'].dirty
    ) {
      this.passwordvalidstyle = 'red';
      this.passwordvalidmsg = 'password must be at least 8 characters';
      if (this.register.controls['password'].valid) {
        this.passwordvalidstyle = 'green';
        this.passwordvalidmsg = 'password is valid';
      }
      if (this.register.controls['password'].value == '') {
        this.passwordvalidmsg = 'password is required*';
        this.passwordvalidstyle = 'black';
      }
    }
    //confirmpass validation
    if (
      this.register.controls['confirmpassword'].dirty &&
      this.register.controls['confirmpassword'].touched
    ) {
      if (
        this.register.controls['password'].value ==
        this.register.controls['confirmpassword'].value
      ) {
        this.confrimpassmsg = 'password is valid';
        this.confirmpassstyle = 'green';
      } else {
        this.confrimpassmsg = 'password does not match';
        this.confirmpassstyle = 'red';
      }
      if (this.register.controls['confirmpassword'].value == '') {
        this.confrimpassmsg = 'confirm your password';
        this.confirmpassstyle = 'black';
      }
    }
    //email validtion
    if (
      this.register.controls['email'].touched &&
      this.register.controls['email'].dirty
    ) {
      this.emailvalidmsg = ' email is invalid';
      this.emailvalidstyle = 'red';
      if (this.register.controls['email'].valid) {
        this.emailvalidmsg = 'email is valid';
        this.emailvalidstyle = 'green';
      }
      if (this.register.controls['email'].value == '') {
        this.emailvalidmsg = 'email is required*';
        this.emailvalidstyle = 'black';
      }
    }
  }

  ngOnInit(): void {}

  submit() {
    this.auth.registerUsername = this.register.controls['username'].value;
    this.auth.registerPassword = this.register.controls['password'].value;
    this.auth.registerEmail = this.register.controls['email'].value;
    this.auth.register();
  }
}
