import { AddproductModel } from './../interface/addproduct-model';
import { Datamodel } from './../interface/datamodel';
import { Router } from '@angular/router';
import { Injectable, DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  count: number = 0;
  cartBlock: boolean = false;
  singleProduct: any;
  menCart: any[];
  womenCart: any[];
  elecCart: any[];
  jeleriesCart: any[];
  cartitems: number;

  constructor(private http: HttpClient, private route: Router) {
    this.singleProduct = {};
    this.cartitems = 0;
    this.elecCart = [];
    this.womenCart = [];
    this.menCart = [];
    this.jeleriesCart = [];
  }

  getElectronics(): Observable<Datamodel[]> {
    return this.http.get<Datamodel[]>(
      'https://fakestoreapi.com/products/category/electronics'
    );
  }
  getmenCloth(): Observable<Datamodel[]> {
    return this.http.get<Datamodel[]>(
      "https://fakestoreapi.com/products/category/men's%20clothing"
    );
  }
  getwomenCloth(): Observable<Datamodel[]> {
    return this.http.get<Datamodel[]>(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
  }
  getjewlery(): Observable<Datamodel[]> {
    return this.http.get<Datamodel[]>(
      'https://fakestoreapi.com/products/category/jewelery'
    );
  }

  getSingleProduct(id: any) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  totalitems() {
    return (this.cartitems =
      this.menCart.length +
      this.womenCart.length +
      this.jeleriesCart.length +
      this.elecCart.length);
  }
  addNewProduct(model: AddproductModel) {
    return this.http.post('https://fakestoreapi.com/products', model);
  }
}
