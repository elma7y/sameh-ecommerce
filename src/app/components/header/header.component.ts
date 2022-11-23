import { ThemesService } from './../../services/themes.service';
import { ProductsService } from 'src/app/services/products.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, DoCheck {
  total = 0;
  profilepic: string;
  green: any;
  greenmode: any;
  constructor(
    private auth: AuthService,
    public product: ProductsService,
    private theme: ThemesService
  ) {
    this.profilepic = '';
  }

  ngDoCheck(): void {
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
    this.checkprofilepic();
    this.product.totalitems();
    this.total = this.product.cartitems;
    this.checktheme();
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
  sideClose() {
    let close = document.getElementById('close');
    close?.click();
  }
  checkprofilepic() {
    if ('profilepic' in localStorage) {
      this.profilepic = localStorage.getItem('profilepic')!;
    } else {
      this.profilepic = 'assets/images/profile/register.png';
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
}
