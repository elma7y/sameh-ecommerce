import { ThemesService } from './../../services/themes.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, DoCheck {
  datevalue: any;
  editusername: boolean = true;
  editpass: boolean;
  editemail: boolean;
  editfn: boolean;
  editln: boolean;
  editphone: boolean;
  editgender: boolean;
  editdob: boolean;
  showpass: boolean;
  username: string = '';
  password: string;
  email: string;
  firstname: string;
  lastname: string;
  number: string;
  date: any;
  gender: string;
  profilepic: string;
  base64: any = '';
  picture: any;
  green: any;
  greenmode: any;
  constructor(private service: AuthService, private theme: ThemesService) {
    this.firstname = '';
    this.lastname = '';
    this.number = '';
    this.gender = '';
    this.password = '';
    this.email = '';
    this.profilepic = '';
    this.showpass = false;
    this.editusername = true;
    this.editfn = true;
    this.editpass = true;
    this.editemail = true;
    this.editln = true;
    this.editphone = true;
    this.editgender = true;
    this.editdob = true;
  }

  ngDoCheck(): void {
    this.checkprofilepic();
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
    this.checktheme();
  }

  ngOnInit(): void {
    this.username = localStorage.getItem('username')!;
    this.password = localStorage.getItem('password')!;
    this.email = localStorage.getItem('email')!;
    this.firstname = localStorage.getItem('fname')!;
    this.lastname = localStorage.getItem('lname')!;
    this.number = localStorage.getItem('number')!;
    this.date = JSON.parse(localStorage.getItem('date')!);
    this.gender = localStorage.getItem('gender')!;
  }

  updateuser() {
    let user = document.getElementById('username') as HTMLInputElement;
    if (user.value != '') {
      localStorage.setItem('username', user.value);
      this.editusername = !this.editusername;
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
        title: 'Username Saved Successfully',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Username Is Empty',
        showConfirmButton: true,
        confirmButtonText: 'ok',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  updatepassword() {
    let pass = document.getElementById('password') as HTMLInputElement;
    if (pass.value != '') {
      localStorage.setItem('password', pass.value);
      this.editpass = !this.editpass;
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
        title: 'Password Saved Successfully',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Password Is Empty',
        showConfirmButton: true,
        confirmButtonText: 'ok',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  updateemail() {
    let email = document.getElementById('email') as HTMLInputElement;
    if (email.value != '') {
      localStorage.setItem('email', email.value);
      this.editemail = !this.editemail;
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
        title: 'Email Saved Successfully',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Email Is Empty',
        showConfirmButton: true,
        confirmButtonText: 'ok',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  updatefname() {
    let fname = document.getElementById('fname') as HTMLInputElement;
    if (fname.value != '') {
      localStorage.setItem('fname', fname.value);
      this.editfn = !this.editfn;
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
        title: 'Firstname Saved Successfully',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Firstname Is Empty',
        showConfirmButton: true,
        confirmButtonText: 'ok',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  updatelname() {
    let lname = document.getElementById('lname') as HTMLInputElement;
    if (lname.value != '') {
      localStorage.setItem('lname', lname.value);
      this.editln = !this.editln;
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
        title: 'Lastname Saved Successfully',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Lastname Is Empty',
        showConfirmButton: true,
        confirmButtonText: 'ok',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  updatephone() {
    let number = document.getElementById('phone') as HTMLInputElement;
    if (number.value != '') {
      localStorage.setItem(
        'number',
        number.value[1] +
          number.value[2] +
          number.value[3] +
          number.value[4] +
          number.value[5] +
          number.value[6] +
          number.value[7] +
          number.value[8] +
          number.value[9] +
          number.value[10]
      );
      this.editphone = !this.editphone;
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
        title: 'Phone Saved Successfully',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Phone Number Is Empty',
        showConfirmButton: true,
        confirmButtonText: 'ok',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  updategender() {
    let gender = document.getElementById('gender') as HTMLInputElement;
    if (gender.value != '') {
      localStorage.setItem('gender', gender.value);
      this.editgender = !this.editgender;
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
        title: 'Gender Saved Successfully',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'Gender Is Empty',
        showConfirmButton: true,
        confirmButtonText: 'ok',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  updatedob() {
    let date = document.getElementById('dob') as HTMLInputElement;
    if (date.value != '') {
      localStorage.setItem('date', JSON.stringify(date.value));
      this.editdob = !this.editdob;
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
        title: 'Date Of Birth Saved Successfully',
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops',
        text: 'date is empty',
        showConfirmButton: true,
        confirmButtonText: 'ok',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  open() {
    document.getElementById('mydate')?.click();
  }
  checkprofilepic() {
    if ('profilepic' in localStorage) {
      this.profilepic = localStorage.getItem('profilepic')!;
    } else {
      this.profilepic = 'assets/images/profile/register.png';
    }
  }
  acceptpic(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
    };
  }
  savepic() {
    if (this.base64 != '') {
      localStorage.setItem('profilepic', this.base64);
    } else {
      Swal.fire({
        icon: 'warning',
        text: 'Please Choose A Picture',
        showConfirmButton: true,
        confirmButtonText: 'Nice',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
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
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
