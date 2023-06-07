import { AuthService } from 'src/app/services/auth.service';
import { ThemesService } from './../../services/themes.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, DoCheck {
  interval: number;
  keyboard: boolean;
  green: any;
  greenmode: any;
  constructor(private theme: ThemesService, private auth: AuthService) {
    this.interval = 2000;
    this.keyboard = true;
  }
  ngDoCheck(): void {
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
    this.checktheme();
  }

  ngOnInit(): void {
    this.auth.notifications();
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
