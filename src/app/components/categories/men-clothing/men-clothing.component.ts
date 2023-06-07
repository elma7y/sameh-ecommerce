import { ThemesService } from './../../../services/themes.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-men-clothing',
  templateUrl: './men-clothing.component.html',
  styleUrls: ['./men-clothing.component.scss'],
})
export class MenClothingComponent implements OnInit, DoCheck {
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
    this.service.getmenCloth().subscribe((res) => {
      this.Products = res;
      this.spinner = false;
    });
  }
  addToCart(event: any) {
    if ('mencart' in localStorage) {
      this.service.menCart == JSON.parse(localStorage.getItem('mencart')!);
      let exist = this.service.menCart.find(
        (item: { item: { id: any } }) => item.item.id == event.item.id
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
        this.service.menCart.push(event);
        localStorage.setItem('mencart', JSON.stringify(this.service.menCart));
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
      this.service.menCart.push(event);
      localStorage.setItem('mencart', JSON.stringify([event]));
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
