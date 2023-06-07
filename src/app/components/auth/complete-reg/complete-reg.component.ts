import { ThemesService } from 'src/app/services/themes.service';
import { AuthService } from './../../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-complete-reg',
  templateUrl: './complete-reg.component.html',
  styleUrls: ['./complete-reg.component.scss'],
})
export class CompleteRegComponent implements OnInit, DoCheck {
  completeregister: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', Validators.required),
    mobilenumber: new FormControl('', Validators.required),
    date: new FormControl(''),
    gender: new FormControl('', Validators.required),
  });
  base64: any = '';
  picture: any;

  constructor(private auth: AuthService) {
    if ('profilepic' in localStorage) {
      this.base64 = localStorage.getItem('profilepic');
    }
  }
  ngDoCheck(): void {
    this.picturecheak();
  }

  ngOnInit(): void {}

  submit() {
    this.auth.fname = this.completeregister.controls['firstname'].value;
    this.auth.lname = this.completeregister.controls['lastname'].value;
    this.auth.number = this.completeregister.controls['mobilenumber'].value;
    this.auth.date = this.completeregister.controls['date'].value;
    this.auth.gender = this.completeregister.controls['gender'].value;
    this.auth.completeRegister();
  }
  open() {
    document.getElementById('mydate')?.click();
  }
  acceptpic(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      localStorage.setItem('profilepic', this.base64);
    };
  }
  picturecheak() {
    if (this.base64 == '') {
      this.picture = 'assets/images/profile/register.png';
    } else {
      this.picture = this.base64;
    }
  }
}
