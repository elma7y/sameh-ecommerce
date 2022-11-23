import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private route: Router, private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if ('state' in localStorage) {
      return true;
    } else {
      Swal.fire({
        title: 'Oops',
        text: 'Do You Want To Continue? Please Login First',
        icon: 'error',
        confirmButtonText: 'Cool',
        background: this.auth.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
      this.route.navigate(['/login']);
      return false;
    }
  }
}
