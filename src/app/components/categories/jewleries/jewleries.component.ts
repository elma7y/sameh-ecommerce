import { ThemesService } from './../../../services/themes.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-jewleries',
  templateUrl: './jewleries.component.html',
  styleUrls: ['./jewleries.component.scss'],
})
export class JewleriesComponent implements OnInit, DoCheck {
  Products: any[];
  spinner: boolean;
  green: any;
  greenmode: any;

  constructor(public service: ProductsService, private theme: ThemesService) {
    this.Products = [];
    this.spinner = true;
  }
  ngDoCheck(): void {
    this.service.totalitems();
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
    this.checktheme();
  }
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.service.getjewlery().subscribe((res) => {
      this.Products = res;
      this.spinner = false;
    });
  }
  addToCart(event: any) {
    if ('jewelcart' in localStorage) {
      this.service.jeleriesCart ==
        JSON.parse(localStorage.getItem('jewelcart')!);
      let exist = this.service.jeleriesCart.find(
        (item) => item.item.id == event.item.id
      );
      if (exist) {
        Swal.fire({
          icon: 'warning',
          text: 'Item Is Already In The Cart',
          showConfirmButton: true,
          confirmButtonText: 'Nice',
          background: this.colorget(),
          color: 'white',
          iconColor: '#deb992',
          confirmButtonColor: '#1ba098',
        });
      } else {
        this.service.jeleriesCart.push(event);
        localStorage.setItem(
          'jewelcart',
          JSON.stringify(this.service.jeleriesCart)
        );
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
          title: 'Item Added Successfully To The Cart',
        });
      }
    } else {
      this.service.jeleriesCart.push(event);
      localStorage.setItem('jewelcart', JSON.stringify([event])!);
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
        title: 'Item Added Successfully To The Cart',
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
