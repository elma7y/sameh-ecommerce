import { CartService } from 'src/app/services/cart.service';
import { AdminAddComponent } from './../admin-add/admin-add.component';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-admin-womens-clothing',
  templateUrl: './admin-womens-clothing.component.html',
  styleUrls: ['./admin-womens-clothing.component.scss'],
})
export class AdminWomensClothingComponent implements OnInit, DoCheck {
  womenproducts: any[];
  womenGroup = this.cart.newProduct;
  Spinner: boolean;
  green: any;
  greenmode: any;

  constructor(
    private prodservice: ProductsService,
    public dialog: MatDialog,
    private cart: CartService,
    private theme: ThemesService
  ) {
    this.womenproducts = [];
    this.Spinner = true;
  }

  ngOnInit(): void {
    this.getwomen();
  }
  ngDoCheck(): void {
    this.greenmode = this.theme.greenmode;
    this.green = this.theme.green;
    this.checktheme();
  }

  getwomen() {
    this.prodservice.getwomenCloth().subscribe((res) => {
      this.womenproducts = res;
      this.Spinner = false;
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdminAddComponent);
    this.cart.picture = '';
    this.cart.base64 = '';
    this.womenGroup.patchValue({
      title: '',
      price: 0,
      image: '',
      desc: '',
      categorie: '',
    });
  }
  update(ele: any) {
    this.cart.base64 = ele.image;
    this.womenGroup.patchValue({
      title: ele.title,
      price: ele.price,
      image: ele.image,
      desc: ele.description,
      categorie: ele.category,
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
}
