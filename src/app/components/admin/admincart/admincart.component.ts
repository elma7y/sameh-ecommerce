import { ThemesService } from 'src/app/services/themes.service';
import { FormGroup, FormControl } from '@angular/forms';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admincart',
  templateUrl: './admincart.component.html',
  styleUrls: ['./admincart.component.scss'],
})
export class AdmincartComponent implements OnInit, DoCheck {
  allcart: any[];
  spinner: boolean;
  green: any;
  greenmode: any;

  daterange: FormGroup = new FormGroup({
    start: new FormControl(new Date().toISOString()),
    end: new FormControl(''),
  });

  constructor(private cart: CartService, private theme: ThemesService) {
    this.allcart = [];
    this.spinner = true;
  }
  ngDoCheck(): void {
    this.greenmode = this.theme.greenmode;
    this.green = this.theme.green;
    this.checktheme();
  }

  ngOnInit(): void {
    this.getcarts();
  }

  getcarts() {
    this.cart.getallcart().subscribe((res: any) => {
      this.allcart = res;
      this.spinner = false;
    });
  }
  deleteorder(index: number) {
    Swal.fire({
      title: 'Are You Sure You Want To Delete This Order?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#deb992',
      confirmButtonText: 'Yes, Delete It!',
      background: this.colorget(),
      color: 'white',
      iconColor: '#deb992',
      confirmButtonColor: '#1ba098',
    }).then((result) => {
      if (result.isConfirmed) {
        this.allcart.splice(index, 1);
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-start',
          showConfirmButton: false,
          timer: 1500,
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
          title: 'Order Deleted Successfully',
        });
      }
    });
  }
  submitdate() {
    this.spinner = true;
    let start = this.daterange.controls['start'].value;
    let end = this.daterange.controls['end'].value;
    this.cart.getInRange(start, end).subscribe((res: any) => {
      this.allcart = res;
      this.spinner = false;
    });
  }

  viewCart(index: number) {
    this.spinner = true;
    this.cart.products = [];
    this.cart.mycart = [];
    this.cart.totalprice = [];
    if (index == 0) {
      index = 1;
    }
    this.cart.getSingleCart(index).subscribe((res: any) => {
      this.cart.products.push(res.products);
      this.cart.viewcart();
      this.spinner = false;
    });
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
