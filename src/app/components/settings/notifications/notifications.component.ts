import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
})
export class NotificationsComponent implements OnInit, DoCheck {
  group: FormGroup = new FormGroup({
    onOff: new FormControl('', Validators.required),
  });
  note: any;
  constructor() {
    this.note = localStorage.getItem('notify');
  }
  ngDoCheck(): void {}

  ngOnInit(): void {}

  submit() {
    if (this.group.controls['onOff'].value == 'on') {
      localStorage.setItem('notify', this.group.controls['onOff'].value);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
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
        title: 'Notifications Are On',
        text: `Enjoy Our Latest Offers`,
      });
      setTimeout(() => {
        location.reload();
      }, 3000);
    } else {
      localStorage.setItem('notify', this.group.controls['onOff'].value);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'Notifications Are Off',
        text: `We Hope You Dont Miss Any Offers`,
      });
      setTimeout(() => {
        location.reload();
      }, 3000);
    }
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
