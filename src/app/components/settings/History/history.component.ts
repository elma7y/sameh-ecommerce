import { CartService } from '../../../services/cart.service';
import { Component, OnInit, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
})
export class SecurityComponent implements OnInit, DoCheck {
  history: any[];
  cleardisabled: boolean;
  constructor(private cartservice: CartService) {
    this.history = cartservice.orderHistory;
    this.cleardisabled = false;
  }
  ngDoCheck(): void {
    this.disableClear();
  }

  ngOnInit(): void {}

  clearhistory() {
    Swal.fire({
      title: 'Are You Sure You Want To Delete Your History?',
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
        localStorage.removeItem('history');
        Swal.fire({
          title: 'Deleted!',
          text: 'Your History Has Been Deleted',
          icon: 'success',
          background: this.colorget(),
          color: 'white',
          iconColor: '#deb992',
          showConfirmButton: false,
          timer: 1000,
        });
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
    });
  }
  disableClear() {
    if ('history' in localStorage) {
      this.cleardisabled = false;
    } else {
      this.cleardisabled = true;
    }
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
