import { ThemesService } from 'src/app/services/themes.service';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, DoCheck {
  id: any = this.route.snapshot.params['id'];
  shownumber: boolean;
  amount: number;
  disableadd: boolean;
  green: any;
  greenmode: any;
  constructor(
    public service: ProductsService,
    private route: ActivatedRoute,
    private theme: ThemesService
  ) {
    this.shownumber = true;
    this.amount = 0;
    this.disableadd = true;
  }
  ngDoCheck(): void {
    this.inputField();
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
    this.checktheme();
  }

  ngOnInit(): void {
    this.getSingleProduct(this.id);
  }

  getSingleProduct(id: any) {
    this.service.getSingleProduct(id).subscribe((res: any) => {
      this.service.singleProduct = res;
    });
  }

  inputField() {
    if (
      this.amount == 0 ||
      this.amount == null ||
      Math.sign(this.amount) === -1
    ) {
      this.disableadd = true;
    } else {
      this.disableadd = false;
    }
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
