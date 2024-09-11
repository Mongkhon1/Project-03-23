import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private navCtrl: NavController, private alertController: AlertController) { }

  async confirmSave() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการบันทึก',
      message: 'คุณแน่ใจหรือว่าต้องการบันทึก?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.Save();
          }
        }
      ]
    });

    await alert.present();
  }

  // ฟังก์ชันบันทึก
  Save() {
    console.log('ข้อมูลถูกบันทึกแล้ว');
    this.navCtrl.navigateBack('/tabs/tab1');
  }

  async confirmCancle() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการบันทึก',
      message: 'คุณแน่ใจหรือว่าต้องการบันทึก?',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.Cancle();
          }
        }
      ]
    });

    await alert.present();
  }

  // ฟังก์ชันบันทึก
  Cancle() {
    console.log('ข้อมูลถูกบันทึกแล้ว');
    this.navCtrl.navigateBack('/tabs/tab1');
  }
  
  ngOnInit() {
  }

}
