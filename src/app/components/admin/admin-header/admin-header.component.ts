import { ThemesService } from 'src/app/services/themes.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit, DoCheck {
  green: any;
  greenmode: any;
  profilepic: string;

  constructor(private auth: AuthService, private theme: ThemesService) {
    this.profilepic = '';
  }
  ngDoCheck(): void {
    this.checkprofilepic();
    this.greenmode = this.theme.greenmode;
    this.green = this.theme.green;
    this.checktheme();
  }

  ngOnInit(): void {}

  logout() {
    this.auth.logout();
  }
  checkprofilepic() {
    if ('profilepic' in localStorage) {
      this.profilepic = localStorage.getItem('profilepic')!;
    } else {
      this.profilepic = 'assets/images/profile/register.png';
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
}
