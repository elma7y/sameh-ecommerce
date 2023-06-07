import { Router } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.scss'],
})
export class AccountSettingsComponent implements OnInit, DoCheck {
  constructor(private route: Router) {}
  ngDoCheck(): void {}

  ngOnInit(): void {}

  deactivate() {
    Swal.fire({
      title: 'Are You Sure You Want To Delete Your Account?',
      text: "You won't be able to revert this!",
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
        Swal.fire({
          title: 'Deleted!',
          text: 'Your Account Has Been Deleted, We Will Miss You',
          icon: 'success',
          background: this.colorget(),
          color: 'white',
          iconColor: '#deb992',
        });
        this.route.navigate(['/register']);
        setTimeout(() => {
          localStorage.clear();
        }, 2000);
        setTimeout(() => {
          localStorage.setItem('theme', 'normal');
          localStorage.setItem('mycolor', '#051622');
        }, 2100);
      }
      if (result.isDismissed) {
        Swal.fire({
          title: 'Thanks For Staying With Us',
          width: 600,
          padding: '3em',
          confirmButtonColor: '#1ba098',
          background: this.colorget(),
          color: 'white',
          iconColor: '#deb992',
        });
      }
    });
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
