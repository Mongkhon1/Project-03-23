import { Component } from '@angular/core';
import { CameraSource } from '@capacitor/camera';
import { CameraResultType } from '@capacitor/camera';
import { Camera } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  image: string | undefined;

  async selectImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos // ใช้ CameraSource.Camera สำหรับการเปิดกล้องถ่ายภาพ
    });
    this.image = image.dataUrl;
  }

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

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
}
