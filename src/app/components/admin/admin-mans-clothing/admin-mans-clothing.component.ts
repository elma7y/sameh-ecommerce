import { ThemesService } from 'src/app/services/themes.service';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminAddComponent } from '../admin-add/admin-add.component';

@Component({
  selector: 'app-admin-mans-clothing',
  templateUrl: './admin-mans-clothing.component.html',
  styleUrls: ['./admin-mans-clothing.component.scss'],
})
export class AdminMansClothingComponent implements OnInit, DoCheck {
  menproducts: any[];
  menGroup = this.cart.newProduct;
  spinner: boolean;
  green: any;
  greenmode: any;

  constructor(
    private prodservice: ProductsService,
    public dialog: MatDialog,
    private cart: CartService,
    private theme: ThemesService
  ) {
    this.menproducts = [];
    this.spinner = true;
  }

  ngOnInit(): void {
    this.getmen();
  }

  ngDoCheck(): void {
    this.greenmode = this.theme.greenmode;
    this.green = this.theme.green;
    this.checktheme();
  }

  getmen() {
    this.prodservice.getmenCloth().subscribe((res) => {
      this.menproducts = res;
      this.spinner = false;
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(AdminAddComponent);
    this.cart.picture = '';
    this.cart.base64 = '';
    this.menGroup.patchValue({
      title: '',
      price: 0,
      image: '',
      desc: '',
      categorie: '',
    });
  }
  update(ele: any) {
    this.cart.base64 = ele.image;
    this.menGroup.patchValue({
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
