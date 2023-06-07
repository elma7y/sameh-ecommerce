import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  DoCheck,
} from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, DoCheck {
  @Input() Product: any;
  @Input() menCart: any[] = [];
  @Input() womenCart: any[] = [];
  @Input() elecCart: any[] = [];
  @Input() jeleriesCart: any[] = [];
  @Output() target = new EventEmitter();
  shownumber: boolean;
  amount: number;
  disableadd: boolean;
  link: string;

  @Output() id = new EventEmitter();

  constructor(private service: ProductsService) {
    this.Product = {};
    this.shownumber = true;
    this.amount = 1;
    this.disableadd = false;
    this.link = `/product-details/${this.Product.id}`;
  }
  ngDoCheck(): void {
    this.inputField();
  }

  ngOnInit(): void {}

  add() {
    this.target.emit({
      item: this.Product,
      quantity: this.amount,
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
}
