import { ThemesService } from 'src/app/services/themes.service';
import { CartService } from './../../services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit, DoCheck {
  cartembty: boolean;
  input: any;
  disableorder: boolean;
  cartitems: number;
  eletotal: number;
  mentotal: number;
  womentotal: number;
  jeweltotal: number;
  total = 0;
  ordersHistroy: any[];
  green: any;
  greenmode: any;
  constructor(
    public service: ProductsService,
    private cartserrvice: CartService,
    private theme: ThemesService
  ) {
    this.eletotal = 0;
    this.mentotal = 0;
    this.womentotal = 0;
    this.jeweltotal = 0;
    this.total = 0;
    this.cartitems = 0;
    this.disableorder = false;
    this.cartembty = false;
    this.ordersHistroy = [];
  }

  ngDoCheck(): void {
    this.getcartitemsnumber();
    this.getTotal();
    this.disableOrder();
    this.cartEmbty();
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
    this.checktheme();
  }

  ngOnInit(): void {}

  totalPrice(price: any, amount: any) {
    let total = price * amount;
    return total;
  }
  clearCart() {
    Swal.fire({
      title: 'Are You Sure You Want To Clear The Cart?',
      text: "You Won't Be Able To Revert This!",
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#deb992',
      confirmButtonText: 'Yes, Delete It!',
      background: this.colorget(),
      color: 'white',
      iconColor: '#deb992',
      confirmButtonColor: '#1ba098',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('allcarts');
        this.service.elecCart = [];
        this.service.menCart = [];
        this.service.jeleriesCart = [];
        this.service.womenCart = [];
        localStorage.removeItem('mencart');
        localStorage.removeItem('womencart');
        localStorage.removeItem('jewelcart');
        localStorage.removeItem('elecart');
        localStorage.removeItem('maincart');
        this.total = 0;
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
          title: 'Cart Cleared Successfully',
        });
      }
    });
  }
  plusele(index: number) {
    this.service.elecCart[index].quantity++;
    localStorage.setItem('elecart', JSON.stringify(this.service.elecCart));
  }
  minusele(index: number) {
    this.service.elecCart[index].quantity--;
    localStorage.setItem('elecart', JSON.stringify(this.service.elecCart));
  }
  plusmen(index: number) {
    this.service.menCart[index].quantity++;
    localStorage.setItem('mencart', JSON.stringify(this.service.menCart));
  }
  minusmen(index: number) {
    this.service.menCart[index].quantity--;
    localStorage.setItem('mencart', JSON.stringify(this.service.menCart));
  }
  pluswomen(index: number) {
    this.service.womenCart[index].quantity++;
    localStorage.setItem('womencart', JSON.stringify(this.service.womenCart));
  }
  minuswomen(index: number) {
    this.service.womenCart[index].quantity--;
    localStorage.setItem('womencart', JSON.stringify(this.service.womenCart));
  }
  plusjewel(index: number) {
    this.service.jeleriesCart[index].quantity++;
    localStorage.setItem(
      'jewelcart',
      JSON.stringify(this.service.jeleriesCart)
    );
  }
  minusjewel(index: number) {
    this.service.jeleriesCart[index].quantity--;
    localStorage.setItem(
      'jewelcart',
      JSON.stringify(this.service.jeleriesCart)
    );
  }
  getTotal() {
    this.total = 0;
    this.eletotal = 0;
    this.jeweltotal = 0;
    this.womentotal = 0;
    this.mentotal = 0;
    if (this.service.elecCart.length != 0) {
      for (let x in this.service.elecCart) {
        let tprice = this.service.elecCart[x].item.price;
        let tquantity = this.service.elecCart[x].quantity;
        this.eletotal += tprice * tquantity;
      }
    }
    if (this.service.menCart.length != 0) {
      for (let y in this.service.menCart) {
        this.mentotal +=
          this.service.menCart[y].item.price * this.service.menCart[y].quantity;
      }
    }
    if (this.service.womenCart.length != 0) {
      for (let z in this.service.womenCart) {
        this.womentotal +=
          this.service.womenCart[z].item.price *
          this.service.womenCart[z].quantity;
      }
    }
    if (this.service.jeleriesCart.length != 0) {
      for (let i in this.service.jeleriesCart) {
        this.jeweltotal +=
          this.service.jeleriesCart[i].item.price *
          this.service.jeleriesCart[i].quantity;
      }
    }
    return (this.total =
      this.mentotal + this.womentotal + this.jeweltotal + this.eletotal);
  }
  getcartitemsnumber() {
    this.service.totalitems();
    return (this.cartitems = this.service.cartitems);
  }
  deleteEleProduct(index: number) {
    Swal.fire({
      title: 'Are You Sure You Want To Delete This Item?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#deb992',
      confirmButtonText: 'Yes, Delete It!',
      background: this.colorget(),
      color: 'white',
      iconColor: '#deb992',
      confirmButtonColor: '#1ba098',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.elecCart.splice(index, 1);
        localStorage.setItem('elecart', JSON.stringify(this.service.elecCart));
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
          title: 'Item Deleted Successfully',
        });
      }
    });
  }
  deleteMenProduct(index: number) {
    Swal.fire({
      title: 'Are You Sure You Want To Delete This Item?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#deb992',
      confirmButtonText: 'Yes, delete it!',
      background: this.colorget(),
      color: 'white',
      iconColor: '#deb992',
      confirmButtonColor: '#1ba098',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.menCart.splice(index, 1);
        localStorage.setItem('mencart', JSON.stringify(this.service.menCart));
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
          title: 'Item Deleted Successfully',
        });
      }
    });
  }
  deleteWomenProduct(index: number) {
    Swal.fire({
      title: 'Are You Sure You Want To Delete This Item?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#deb992',
      confirmButtonText: 'Yes, Delete It!',
      background: this.colorget(),
      color: 'white',
      iconColor: '#deb992',
      confirmButtonColor: '#1ba098',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.womenCart.splice(index, 1);
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
          title: 'Item Deleted Successfully',
        });
      }
    });
  }
  deleteJewelProduct(index: number) {
    Swal.fire({
      title: 'Are You Sure You Want To Delete This Item?',
      icon: 'warning',
      showCancelButton: true,
      cancelButtonColor: '#deb992',
      confirmButtonText: 'Yes, Delete It!',
      background: this.colorget(),
      color: 'white',
      iconColor: '#deb992',
      confirmButtonColor: '#1ba098',
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.jeleriesCart.splice(index, 1);
        localStorage.setItem(
          'jewelcart',
          JSON.stringify(this.service.jeleriesCart)
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
          title: 'Item Deleted Successfully',
        });
      }
    });
  }
  addnewCartele() {
    if (this.service.elecCart.length != 0) {
      let eleproducts = this.service.elecCart.map((ele) => {
        return { productId: ele.item.id, quantity: ele.quantity };
      });
      let model = {
        userId: localStorage.getItem('userid'),
        date: new Date(),
        products: eleproducts,
      };
      this.cartserrvice.createNewCart(model).subscribe(
        (res) => {
          Swal.fire({
            icon: 'success',
            text: `your order has been placed successfully ${localStorage.getItem(
              'username'
            )} at ${model.date} with total amount of ${this.total}$`,
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
            text: `something went wrong ${localStorage.getItem('username')}`,
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
  }
  addnewCartmen() {
    if (this.service.menCart.length != 0) {
      let menproducts = this.service.menCart.map((ele) => {
        return { productId: ele.item.id, quantity: ele.quantity };
      });
      let model = {
        userId: localStorage.getItem('userid'),
        date: new Date(),
        products: menproducts,
      };
      this.cartserrvice.createNewCart(model).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            text: `your order has been placed successfully ${localStorage.getItem(
              'username'
            )} at ${model.date} with total amount of ${this.total}$`,
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
            text: `something went wrong ${localStorage.getItem('username')}`,
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
  }
  addnewCartwomen() {
    if (this.service.womenCart.length != 0) {
      let womenproducts = this.service.womenCart.map((ele) => {
        return { productId: ele.item.id, quantity: ele.quantity };
      });
      let model = {
        userId: localStorage.getItem('userid'),
        date: new Date(),
        products: womenproducts,
      };
      this.cartserrvice.createNewCart(model).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            text: `your order has been placed successfully ${localStorage.getItem(
              'username'
            )} at ${model.date} with total amount of ${this.total}$`,
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
            text: `something went wrong ${localStorage.getItem('username')}`,
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
  }
  addnewCartjewel() {
    if (this.service.jeleriesCart.length != 0) {
      let jewelproducts = this.service.jeleriesCart.map((ele) => {
        return { productId: ele.item.id, quantity: ele.quantity };
      });
      let model = {
        userId: localStorage.getItem('userid'),
        date: new Date(),
        products: jewelproducts,
      };
      this.cartserrvice.createNewCart(model).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            text: `your order has been placed successfully ${localStorage.getItem(
              'username'
            )} at ${model.date} with total amonut of ${this.total}$`,
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
            text: `something went wrong ${localStorage.getItem('username')}`,
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
  }
  disableOrder() {
    for (let x in this.service.menCart) {
      if (this.service.menCart[x].quantity == 0) {
        this.service.menCart[x].quantity = 1;
      }
      if (Math.sign(this.service.menCart[x].quantity) === -1) {
        this.service.menCart[x].quantity = 1;
      }
    }
    for (let x in this.service.womenCart) {
      if (this.service.womenCart[x].quantity == 0) {
        this.service.womenCart[x].quantity = 1;
      }
      if (Math.sign(this.service.womenCart[x].quantity) === -1) {
        this.service.womenCart[x].quantity = 1;
      }
    }
    for (let x in this.service.elecCart) {
      if (this.service.elecCart[x].quantity == 0) {
        this.service.elecCart[x].quantity = 1;
      }
      if (Math.sign(this.service.elecCart[x].quantity) === -1) {
        this.service.elecCart[x].quantity = 1;
      }
    }
    for (let x in this.service.jeleriesCart) {
      if (this.service.jeleriesCart[x].quantity == 0) {
        this.service.jeleriesCart[x].quantity = 1;
      }
      if (Math.sign(this.service.jeleriesCart[x].quantity) === -1) {
        this.service.jeleriesCart[x].quantity = 1;
      }
    }
    if (
      this.service.elecCart.length == 0 &&
      this.service.menCart.length == 0 &&
      this.service.womenCart.length == 0 &&
      this.service.jeleriesCart.length == 0
    ) {
      this.disableorder = true;
    } else {
      this.disableorder = false;
    }
  }
  cartEmbty() {
    if (this.service.cartitems == 0) {
      this.cartembty = true;
    } else {
      this.cartembty = false;
    }
  }
  history() {
    if ('history' in localStorage) {
      this.ordersHistroy = JSON.parse(localStorage.getItem('history')!);
      this.cartserrvice.orderHistory = this.ordersHistroy;
      let exist = this.ordersHistroy.find((item) => {
        item == item;
      });
      let date = new Date();
      if (exist) {
      } else {
        this.ordersHistroy.push(
          `your order has been placed successfully ${localStorage.getItem(
            'username'
          )} at ${date} with total amount of ${this.total} $`
        );
        this.cartserrvice.orderHistory = this.ordersHistroy;
        localStorage.setItem('history', JSON.stringify(this.ordersHistroy));
      }
    } else {
      let date = new Date();
      this.ordersHistroy.push(
        `your order has been placed successfully ${localStorage.getItem(
          'username'
        )} at ${date} with total amount of ${this.total} $`
      );
      this.cartserrvice.orderHistory = this.ordersHistroy;
      localStorage.setItem('history', JSON.stringify(this.ordersHistroy));
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
