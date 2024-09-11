import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  login() {
    if (this.username === 'Mongkhon' && this.password === 'Mongkhon2007') {
      this.navCtrl.navigateRoot('/tabs');
    } else {
      alert('Username หรือ Password ผิดพลาด');
    }
  }   

  
}
