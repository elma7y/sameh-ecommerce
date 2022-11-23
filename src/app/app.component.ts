import { AuthService } from 'src/app/services/auth.service';
import { ThemesService } from 'src/app/services/themes.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { Component, DoCheck, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck, OnInit {
  hideHeader: boolean;
  headandfoot: boolean;

  constructor(
    private route: Router,
    private service: ProductsService,
    private theme: ThemesService,
    private auth: AuthService
  ) {
    this.hideHeader = true;
    this.headandfoot = true;
  }
  ngOnInit(): void {
    this.theme.setmaintheme();
    this.cartCheck();
    this.notifications();
  }
  ngDoCheck(): void {
    this.headercheck();
    this.admincheck();
  }
  cartCheck() {
    if ('elecart' in localStorage) {
      this.service.elecCart = JSON.parse(localStorage.getItem('elecart')!);
    }
    if ('mencart' in localStorage) {
      this.service.menCart = JSON.parse(localStorage.getItem('mencart')!);
    }
    if ('womencart' in localStorage) {
      this.service.womenCart = JSON.parse(localStorage.getItem('womencart')!);
    }
    if ('jewelcart' in localStorage) {
      this.service.jeleriesCart = JSON.parse(
        localStorage.getItem('jewelcart')!
      );
    }
  }
  headercheck() {
    if (
      this.route.url == '/login' ||
      this.route.url == '/' ||
      this.route.url == '/register' ||
      this.route.url == '/complete-reg' ||
      this.auth.notfound == true
    ) {
      this.hideHeader = false;
    } else {
      this.hideHeader = true;
    }
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
  admincheck() {
    if (
      this.route.url == '/admin-cart' ||
      this.route.url == '/admin-view' ||
      this.route.url == '/admin-home' ||
      this.route.url == '/admin-electronics' ||
      this.route.url == '/admin-jewelries' ||
      this.route.url == '/admin-men-clothing' ||
      this.route.url == '/admin-women-clothing' ||
      this.route.url == '/admin-settings'
    ) {
      this.headandfoot = false;
    } else {
      this.headandfoot = true;
    }
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
