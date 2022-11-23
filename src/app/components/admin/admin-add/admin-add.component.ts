import { ProductsService } from 'src/app/services/products.service';
import { FormGroup } from '@angular/forms';
import { Component, OnInit, DoCheck } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss'],
})
export class AdminAddComponent implements OnInit, DoCheck {
  base64: any = '';
  picture: any;
  seletedCat: boolean;
  newProduct: FormGroup = this.cart.newProduct;

  constructor(
    public dialog: MatDialog,
    private productservice: ProductsService,
    private cart: CartService
  ) {
    this.seletedCat = false;
  }
  ngDoCheck(): void {
    this.base64 = this.cart.base64;
    this.picture = this.cart.picture;
    this.picturecheak();
    this.checkprice();
  }

  ngOnInit(): void {}

  openfile() {
    let up = document.getElementById('loading');
    up?.click();
  }
  acceptpic(event: any) {
    this.cart.acceptpic(event);
  }
  closeDialog() {
    const dialogRef = this.dialog.closeAll();
  }
  picturecheak() {
    this.cart.picturecheak();
    this.newProduct.controls['image'].setValue(this.base64);
  }
  addProduct() {
    let productData = this.newProduct.value;

    this.productservice.addNewProduct(productData).subscribe(
      (res) => {
        Swal.fire({
          icon: 'success',
          text: `Product Has Been Added Successfully To ${this.newProduct.controls['categorie'].value} Category`,
          showConfirmButton: true,
          confirmButtonText: 'Nice',
          background: this.colorget(),
          color: 'white',
          iconColor: '#deb992',
          confirmButtonColor: '#1ba098',
        });
      },
      () => {
        Swal.fire({
          icon: 'error',
          text: `We Are Sorry This Fake Api Cant Accept More Than A 75kb Size Picture,, To Add A Product Succefully Upload A Low Size Picture
          Note: Nothing Will Be Added In Real Beacause Its A Fake Api... There Is No Server.`,
          showConfirmButton: true,
          confirmButtonText: 'Try Again',
          background: this.colorget(),
          color: 'white',
          iconColor: '#deb992',
          confirmButtonColor: '#1ba098',
        });
      }
    );
  }
  checkprice() {
    if (this.newProduct.controls['price'].value == 0) {
      this.newProduct.controls['price'].setValue(1);
    }
    if (Math.sign(this.newProduct.controls['price'].value) === -1) {
      this.newProduct.controls['price'].setValue(1);
    }
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
