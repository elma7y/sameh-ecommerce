import { ThemesService } from './../../../services/themes.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-appearance',
  templateUrl: './appearance.component.html',
  styleUrls: ['./appearance.component.scss'],
})
export class AppearanceComponent implements OnInit, DoCheck {
  green: any;
  greenmode: any;
  main: boolean;
  constructor(private theme: ThemesService) {
    this.main = false;
  }

  ngDoCheck(): void {
    this.checkactive();
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
  }

  ngOnInit(): void {}

  maintheme() {
    this.theme.maintheme();
  }
  greentheme() {
    this.theme.greentheme();
  }
  redtheme() {
    this.theme.redtheme();
  }
  bluetheme() {
    this.theme.bluetheme();
  }
  goldentheme() {
    this.theme.goldentheme();
  }
  purpletheme() {
    this.theme.purpletheme();
  }
  checkactive() {
    let maintheme = document.getElementById('maintheme');
    let greentheme = document.getElementById('greentheme');
    let redtheme = document.getElementById('redtheme');
    let bluetheme = document.getElementById('bluetheme');
    let goldentheme = document.getElementById('goldentheme');
    let purpletheme = document.getElementById('purpletheme');
    if (localStorage.getItem('theme') == 'normal') {
      maintheme?.classList.add('active');
      greentheme?.classList.remove('active');
      bluetheme?.classList.remove('active');
      goldentheme?.classList.remove('active');
      purpletheme?.classList.remove('active');
      redtheme?.classList.remove('active');
    } else if (localStorage.getItem('theme') == 'green') {
      greentheme?.classList.add('active');
      maintheme?.classList.remove('active');
      bluetheme?.classList.remove('active');
      goldentheme?.classList.remove('active');
      purpletheme?.classList.remove('active');
      redtheme?.classList.remove('active');
    } else if (localStorage.getItem('theme') == 'red') {
      redtheme?.classList.add('active');
      maintheme?.classList.remove('active');
      bluetheme?.classList.remove('active');
      goldentheme?.classList.remove('active');
      purpletheme?.classList.remove('active');
      greentheme?.classList.remove('active');
    } else if (localStorage.getItem('theme') == 'blue') {
      bluetheme?.classList.add('active');
      maintheme?.classList.remove('active');
      redtheme?.classList.remove('active');
      goldentheme?.classList.remove('active');
      purpletheme?.classList.remove('active');
      greentheme?.classList.remove('active');
    } else if (localStorage.getItem('theme') == 'golden') {
      goldentheme?.classList.add('active');
      maintheme?.classList.remove('active');
      redtheme?.classList.remove('active');
      bluetheme?.classList.remove('active');
      purpletheme?.classList.remove('active');
      greentheme?.classList.remove('active');
    } else {
      purpletheme?.classList.add('active');
      maintheme?.classList.remove('active');
      redtheme?.classList.remove('active');
      bluetheme?.classList.remove('active');
      goldentheme?.classList.remove('active');
      greentheme?.classList.remove('active');
    }
  }
}
