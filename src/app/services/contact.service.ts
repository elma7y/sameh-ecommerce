import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  message: FormGroup = new FormGroup({
    name: new FormControl(this.getname(), [
      Validators.required,
      Validators.minLength(5),
    ]),
    email: new FormControl(this.getemail(), [
      Validators.required,
      Validators.email,
    ]),
    msg: new FormControl('', [Validators.required, Validators.minLength(2)]),
  });
  constructor(private http: HttpClient) {}

  sendmsg(model: any) {
    return this.http.post('https://formcarry.com/s/uHsOzgNsl', model);
  }
  getname(): string {
    let name = localStorage.getItem('fname')!;
    return name;
  }
  getemail(): string {
    let email = localStorage.getItem('email')!;
    return email;
  }
}
