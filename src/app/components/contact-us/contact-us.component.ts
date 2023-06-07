import { ContactService } from './../../services/contact.service';
import { ThemesService } from 'src/app/services/themes.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit, DoCheck {
  green: any;
  greenmode: any;
  namevalidmsg: string;
  emailvalidmsg: string;
  namevalidstyle: string;
  emailvalidstyle: string;
  msgvalidmsg: string;
  msgvalidstyle: string;
  focus: boolean;
  message: FormGroup = this.contact.message;

  constructor(private theme: ThemesService, private contact: ContactService) {
    this.focus = false;
    //validation msgs
    this.namevalidmsg = 'name is required*';
    this.emailvalidmsg = 'email is required*';
    this.msgvalidmsg = 'a message is required*';
    //validation styles
    this.namevalidstyle = 'black';
    this.emailvalidstyle = 'black';
    this.msgvalidstyle = 'black';
  }
  ngDoCheck(): void {
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
    this.checktheme();
    this.messagevalidation();
  }

  ngOnInit(): void {}

  checktheme() {
    if (localStorage.getItem('theme') == 'green') {
      this.greenmode = true;
    } else if (localStorage.getItem('theme') == 'red') {
      this.greenmode = true;
    } else if (localStorage.getItem('theme') == 'blue') {
      this.greenmode = true;
    } else if (localStorage.getItem('theme') == 'golden') {
      this.greenmode = true;
    } else if (localStorage.getItem('theme') == 'purple') {
      this.greenmode = true;
    } else {
      this.greenmode = false;
    }
  }
  messagevalidation() {
    if (
      this.message.controls['name'].touched &&
      this.message.controls['name'].dirty
    ) {
      this.namevalidstyle = 'red';
      this.namevalidmsg = 'name must be at least 5 characters';
      if (this.message.controls['name'].valid) {
        this.namevalidstyle = 'green';
        this.namevalidmsg = 'name is valid';
        if (this.message.controls['name'].value == '') {
          this.namevalidmsg = 'name is required*';
          this.namevalidstyle = 'black';
        }
      }
    }
    if (
      this.message.controls['email'].touched &&
      this.message.controls['email'].dirty
    ) {
      this.emailvalidmsg = ' email is invalid';
      this.emailvalidstyle = 'red';
      if (this.message.controls['email'].valid) {
        this.emailvalidmsg = 'email is valid';
        this.emailvalidstyle = 'green';
      }
      if (this.message.controls['email'].value == '') {
        this.emailvalidmsg = 'email is required*';
        this.emailvalidstyle = 'black';
      }
    }
    if (
      this.message.controls['msg'].touched &&
      this.message.controls['msg'].dirty
    ) {
      this.msgvalidmsg = ' at least two words are required';
      this.msgvalidstyle = 'red';
      if (this.message.controls['msg'].valid) {
        this.msgvalidmsg = 'msg is valid';
        this.msgvalidstyle = 'green';
      }
      if (this.message.controls['msg'].value == '') {
        this.msgvalidmsg = 'msg is required*';
        this.msgvalidstyle = 'black';
      }
    }
  }
  sendmsg(model: any) {
    this.contact.sendmsg(model).subscribe(
      (res) => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          background: this.colorget(),
          color: 'white',
          iconColor: '#deb992',
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: 'success',
          title: 'Your Message Sent Successfully',
        });
      },
      () => {
        Swal.fire({
          icon: 'warning',
          text: 'Something Went Wrong',
          showConfirmButton: true,
          confirmButtonText: 'Please Try Again',
          background: this.colorget(),
          color: 'white',
          iconColor: '#deb992',
          confirmButtonColor: '#1ba098',
        });
      }
    );
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
