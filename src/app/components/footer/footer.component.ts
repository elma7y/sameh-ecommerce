import { ThemesService } from './../../services/themes.service';
import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, DoCheck {
  green: any;
  greenmode: any;
  constructor(private theme: ThemesService) {}
  ngDoCheck(): void {
    this.green = this.theme.green;
    this.greenmode = this.theme.greenmode;
    this.checktheme();
  }

  ngOnInit(): void {}

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
