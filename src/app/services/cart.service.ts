import { ProductsService } from 'src/app/services/products.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  newProduct: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    desc: new FormControl('', [Validators.required]),
    categorie: new FormControl('', [Validators.required]),
  });

  orderHistory: any[];
  base64: any = '';
  picture: any;
  products: any[];
  mycart: any[];
  totalprice: any[];
  total: number;
  constructor(private http: HttpClient, private productserve: ProductsService) {
    this.orderHistory = JSON.parse(localStorage.getItem('history')!);
    this.products = [];
    this.mycart = [];
    this.totalprice = [];
    this.total = 0;
  }

  createNewCart(model: any) {
    return this.http.post('https://fakestoreapi.com/carts', model);
  }

  getallcart() {
    return this.http.get('https://fakestoreapi.com/carts');
  }

  getInRange(start: any, end: any) {
    return this.http.get(
      `https://fakestoreapi.com/carts?startdate=${start}&enddate=${end}`
    );
  }

  getSingleCart(index: number) {
    return this.http.get(`https://fakestoreapi.com/carts/${index}`);
  }
  viewcart() {
    for (let x in this.products) {
      for (let y in this.products[x]) {
        this.productserve
          .getSingleProduct(this.products[x][y].productId)
          .subscribe((res: any) => {
            this.mycart.push({
              item: res,
              quantity: this.products[x][y].quantity,
            });
            this.totalprice.push(res.price * this.products[x][y].quantity);
            this.total = this.gettotalprice();
          });
      }
    }
  }
  gettotalprice() {
    const sum = this.totalprice.reduce((accumulator, value) => {
      return accumulator + value;
    }, 0);
    return sum;
  }
  picturecheak() {
    if (this.base64 == '') {
      this.picture = 'assets/images/profile/1024px-Picture_icon_BLACK.svg.png';
    } else {
      this.picture = this.base64;
    }
  }
  acceptpic(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
    };
    this.newProduct.controls['image'].setValue(this.base64);
  }
}
