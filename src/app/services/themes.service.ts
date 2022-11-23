import { Injectable, DoCheck } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemesService implements DoCheck {
  green: {} = { 'background-color': '' };
  greenmode: any;
  constructor() {}
  ngDoCheck(): void {
    this.setmaintheme();
    this.maintheme();
    this.greentheme();
    this.redtheme();
  }
  setmaintheme() {
    if ('mycolor' in localStorage) {
      this.green = { 'background-color': localStorage.getItem('mycolor') };
    }
  }
  maintheme() {
    localStorage.setItem('theme', 'normal');
    localStorage.setItem('mycolor', '#051622');
    this.greenmode = false;
  }
  greentheme() {
    localStorage.setItem('theme', 'green');
    localStorage.setItem('mycolor', '#091f00');
    this.greenmode = true;
    this.green = { 'background-color': '#091f00' };
  }
  redtheme() {
    localStorage.setItem('theme', 'red');
    localStorage.setItem('mycolor', '#350505');
    this.greenmode = true;
    this.green = { 'background-color': '#350505' };
  }
  bluetheme() {
    localStorage.setItem('theme', 'blue');
    localStorage.setItem('mycolor', '#02072d');
    this.greenmode = true;
    this.green = { 'background-color': '#02072d' };
  }
  goldentheme() {
    localStorage.setItem('theme', 'golden');
    localStorage.setItem('mycolor', '#3a3200');
    this.greenmode = true;
    this.green = { 'background-color': '#3a3200' };
  }
  purpletheme() {
    localStorage.setItem('theme', 'purple');
    localStorage.setItem('mycolor', '#2d1656');
    this.greenmode = true;
    this.green = { 'background-color': '#2d1656' };
  }
}
