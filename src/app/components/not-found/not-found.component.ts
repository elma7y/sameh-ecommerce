import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  constructor(private route: Router, private auth: AuthService) {}

  ngOnInit(): void {
    this.notfound();
  }
  notfound() {
    this.auth.notfound = true;
    Swal.fire({
      title: 'Oops',
      text: 'Error 404 "Not Found"',
      icon: 'error',
      confirmButtonText: 'Cool',
      background: this.colorget(),
      color: 'white',
      iconColor: '#deb992',
      confirmButtonColor: '#1ba098',
    }).then((result) => {
      if (result.isConfirmed) {
        this.route.navigate(['/login']);
        localStorage.removeItem('Login');
        localStorage.removeItem('state');
      } else {
        this.route.navigate(['/login']);
        localStorage.removeItem('Login');
        localStorage.removeItem('state');
      }
    });
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
