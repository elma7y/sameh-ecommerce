import { ThemesService } from 'src/app/services/themes.service';
import { CartService } from './../../../services/cart.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss'],
})
export class AdminViewComponent implements OnInit, DoCheck {
  mycart: any[];
  total: any;
  green: any;
  greenmode: any;

  constructor(private cart: CartService, private theme: ThemesService) {
    this.mycart = cart.mycart;
  }
  ngDoCheck(): void {
    this.greenmode = this.theme.greenmode;
    this.green = this.theme.green;
    this.checktheme();
    this.total = this.cart.total;
  }

  ngOnInit(): void {}

  getTotal(first: any, second: any) {
    return first * second;
  }
  back() {
    history.back();
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
}
