import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //register info
  registerUsername: string;
  registerPassword: string;
  registerEmail: string;
  fname: any;
  lname: any;
  number: any;
  date: any;
  gender: any;
  //login info
  loginusername: any;
  loginpassword: any;
  //notfoundguard
  notfound: boolean;
  constructor(private route: Router, private http: HttpClient) {
    this.registerUsername = '';
    this.registerPassword = '';
    this.registerEmail = '';
    this.loginusername = '';
    this.loginpassword = '';
    this.notfound = false;
  }

  register() {
    if (localStorage.getItem(this.registerUsername)) {
      Swal.fire({
        icon: 'error',
        text: 'Username Is Already Registered',
        showConfirmButton: true,
        confirmButtonText: 'Change Username',
        background: '#051622',
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    } else {
      localStorage.setItem(this.registerUsername, this.registerUsername);
      localStorage.setItem(this.registerPassword, this.registerPassword);
      localStorage.setItem(this.registerEmail, this.registerEmail);
      localStorage.setItem('username', this.registerUsername);
      localStorage.setItem('password', this.registerPassword);
      localStorage.setItem('email', this.registerEmail);
      this.route.navigate(['/complete-reg']);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: '#051622',
        color: 'white',
        iconColor: '#deb992',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'Registed Successfully',
      });
    }
  }
  completeRegister() {
    localStorage.setItem('fname', this.fname);
    localStorage.setItem('lname', this.lname);
    localStorage.setItem('number', this.number);
    localStorage.setItem('date', JSON.stringify(this.date));
    localStorage.setItem('gender', this.gender);
    this.route.navigate(['/login']);
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      background: '#051622',
      color: 'white',
      iconColor: '#deb992',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Welcome To Our Family',
    });
  }
  login() {
    if (localStorage.getItem('mycolor')) {
    } else {
      localStorage.setItem('mycolor', '#051622');
    }
    if (this.loginusername == 'admin' && this.loginpassword == 'admin123') {
      this.route.navigate(['/admin-home']);
      localStorage.setItem('state', 'admin');
      localStorage.setItem('notify', 'on');
      localStorage.removeItem('Login');
      this.notfound = false;
    }
    if (
      localStorage.getItem(this.loginusername) &&
      localStorage.getItem(this.loginpassword) &&
      this.loginusername != 'admin' &&
      this.loginpassword != 'admin123'
    ) {
      this.route.navigate(['/home']);
      localStorage.setItem('userid', `${Math.round(Math.random() * 100)}`);
      localStorage.setItem('Login', 'success');
      localStorage.setItem('notify', 'on');
      localStorage.removeItem('state');
      this.notfound = false;
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: '#051622',
        color: 'white',
        iconColor: '#deb992',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });

      Toast.fire({
        icon: 'success',
        title: 'You Signed In Successfully',
        text: `Welcome ${this.loginusername}`,
      });
    } else {
      if (this.loginusername != 'admin' && this.loginpassword != 'admin123')
        Swal.fire({
          icon: 'error',
          text: 'Username Not Found Please Try Again',
          showConfirmButton: true,
          confirmButtonText: 'cool',
          background: '#051622',
          color: 'white',
          iconColor: '#deb992',
          confirmButtonColor: '#1ba098',
        });
    }
  }
  logout() {
    Swal.fire({
      title: 'Are You Sure You Want To Logout ?',
      icon: 'question',
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> YES!',
      cancelButtonColor: '#deb992',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i> NO',
      cancelButtonAriaLabel: 'Thumbs down',
      background: this.colorget(),
      color: 'white',
      iconColor: '#deb992',
      confirmButtonColor: '#1ba098',
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate(['/login']);
        localStorage.removeItem('Login');
        localStorage.removeItem('state');
      }
    });
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
  notifications() {
    if (localStorage.getItem('notify') == 'on') {
      setInterval(() => {
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
          icon: 'info',
          title: 'check out discounts on electronics',
        });
      }, 15000);
      setInterval(() => {
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
          icon: 'info',
          title: 'check out discounts on mens clothes',
        });
      }, 30000);
      setInterval(() => {
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
          icon: 'info',
          title: 'check out discounts on women clothes',
        });
      }, 45000);
      setInterval(() => {
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
          icon: 'info',
          title: 'check out discounts on jeweleries',
        });
      }, 60000);
    }
  }
}
