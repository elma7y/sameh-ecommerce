import { Component, OnInit, DoCheck } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-settings',
  templateUrl: './admin-settings.component.html',
  styleUrls: ['./admin-settings.component.scss'],
})
export class AdminSettingsComponent implements OnInit, DoCheck {
  green: any;
  greenmode: any;
  base64: any = '';
  profilepic: any;

  constructor(private theme: ThemesService) {}

  ngDoCheck(): void {
    this.checkprofilepic();
    this.greenmode = this.theme.greenmode;
    this.green = this.theme.green;
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
  acceptpic(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
    };
  }
  checkprofilepic() {
    if ('profilepic' in localStorage) {
      this.profilepic = localStorage.getItem('profilepic')!;
    } else {
      this.profilepic = 'assets/images/profile/register.png';
    }
  }
  savepic() {
    if (this.base64 != '') {
      localStorage.setItem('profilepic', this.base64);
    } else {
      Swal.fire({
        icon: 'warning',
        text: 'Please Choose A Picture',
        showConfirmButton: true,
        confirmButtonText: 'Nice',
        background: this.colorget(),
        color: 'white',
        iconColor: '#deb992',
        confirmButtonColor: '#1ba098',
      });
    }
  }
  colorget(): string {
    let color = localStorage.getItem('mycolor')!;
    return color;
  }
}
