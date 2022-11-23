import { ThemesService } from './../../../services/themes.service';
import { ProductsService } from './../../../services/products.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss'],
})
export class ElectronicsComponent implements OnInit, DoCheck {
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
    this.service.getElectronics().subscribe((res) => {
      this.Products = res;
      this.spinner = false;
    });
  }
  addToCart(event: any) {
    if ('elecart' in localStorage) {
      this.service.elecCart == JSON.parse(localStorage.getItem('elecart')!);
      let exist = this.service.elecCart.find(
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
        this.service.elecCart.push(event);
        localStorage.setItem('elecart', JSON.stringify(this.service.elecCart));
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
      this.service.elecCart.push(event);
      localStorage.setItem('elecart', JSON.stringify([event])!);
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
