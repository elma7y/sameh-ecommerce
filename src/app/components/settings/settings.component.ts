import { ThemesService } from './../../services/themes.service';
import { Router } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit, DoCheck {
  accountSettings: boolean;
  username: any;
  green: any;
  greenmode: any;

  constructor(private route: Router, private theme: ThemesService) {
    this.accountSettings = true;
    this.username = localStorage.getItem('username');
  }
  ngDoCheck(): void {
    this.greenmode = this.theme.greenmode;
    this.green = this.theme.green;
    this.childcomp();
    this.checktheme();
  }

  ngOnInit(): void {
    this.checktheme();
  }

  childcomp() {
    if (
      this.route.url == '/settings/account-settings' ||
      this.route.url == '/settings/notifications' ||
      this.route.url == '/settings/security' ||
      this.route.url == '/settings/appearance'
    ) {
      this.accountSettings = false;
    } else {
      this.accountSettings = true;
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
