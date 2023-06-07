import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-women-clothing',
  templateUrl: './women-clothing.component.html',
  styleUrls: ['./women-clothing.component.scss'],
})
export class WomenClothingComponent implements OnInit, DoCheck {
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
    this.service.getwomenCloth().subscribe((res) => {
      this.Products = res;
      this.spinner = false;
    });
  }
  addToCart(event: any) {
    if ('womencart' in localStorage) {
      this.service.womenCart == JSON.parse(localStorage.getItem('womencart')!);
      let exist = this.service.womenCart.find(
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
        this.service.womenCart.push(event);
        localStorage.setItem(
          'womencart',
          JSON.stringify(this.service.womenCart)
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
      this.service.womenCart.push(event);
      localStorage.setItem('womencart', JSON.stringify([event])!);
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
