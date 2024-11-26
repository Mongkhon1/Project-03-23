import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  searchTerm: string = '';
  products = [
    { name: 'Petronas Sprinta F700 4T 15W-50', stock: 60, price: 150, category: 'น้ำมันเครื่อง', primary: 336701, url: 'assets/img/น้ำมันเครื่อง/Petronas Sprinta F700 4T 15W-50  150 .png', },
    { name: 'Yamalube Sports Plus', stock: 1, price: 200, category: 'น้ำมันเครื่อง', primary: 336702, url: 'assets/img/น้ำมันเครื่อง/Yamalube Sports Plus 200 บาท.png', },
    { name: 'น้ำมั่นเครื่องดีเซล เพาวซ่าร์ ลองไลฟ์', stock: 60, price: 825, category: 'น้ำมันเครื่อง', primary: 336703, url: 'assets/img/น้ำมันเครื่อง/น้ำมั่นเครื่องดีเซล เพาวซ่าร์ ลองไลฟ์ ราคา 825 บาท.png', },

    { name: 'YSS โช๊คอัพหลัง DTG GAS HYBRID', stock: 20, price: 2400, category: 'อุปกรณ์ตกแต่ง', primary: 336706, url: 'assets/img/อุปกรณ์แต่ง/YSS โช๊คอัพหลัง DTG GAS HYBRID ราคา 2400 บาท.png', },
    { name: 'กันล้ม CNC', stock: 29, price: 1500, category: 'อุปกรณ์ตกแต่ง', primary: 336707, url: 'assets/img/อุปกรณ์แต่ง/กันล้ม CNC ราคา 1,500 บาท.png', },
    { name: 'ข้อต่อโซ่ JOMTHAI เบอร์ 525 ASMX', stock: 80, price: 1150, category: 'อุปกรณ์ตกแต่ง', primary: 336708, url: 'assets/img/อุปกรณ์แต่ง/ข้อต่อโซ่ JOMTHAI เบอร์ 525 ASMX ราคา 1,150 บาท.png', },
    { name: 'ชุดปลอกแฮนด์มือจับยาง', stock: 69, price: 400, category: 'อุปกรณ์ตกแต่ง', primary: 336709, url: 'assets/img/อุปกรณ์แต่ง/ชุดปลอกแฮนด์มือจับยาง 22 มม. สไตล์เรโทร ราคา 400 บาท.png', },
    { name: 'โซ๊คอัพ OHLINS YA 218', stock: 12, price: 27300, category: 'อุปกรณ์ตกแต่ง', primary: 336710, url: 'assets/img/อุปกรณ์แต่ง/โซ๊คอัพ OHLINS YA 218 ราคา 27,300 บาท.png', },
    { name: 'แตร Pos', stock: 25, price: 1400, category: 'อุปกรณ์ตกแต่ง', primary: 336711, url: 'assets/img/อุปกรณ์แต่ง/แตร Posh ราคา 1,400 บาท.png', },
    { name: 'ท่อ Super trapp', stock: 18, price: 7500, category: 'อุปกรณ์ตกแต่ง', primary: 336712, url: 'assets/img/อุปกรณ์แต่ง/ท่อ Super trapp ราคา 7,500 บาท.png', },
    { name: 'เบาะทรง Greentea', stock: 120, price: 5500, category: 'อุปกรณ์ตกแต่ง', primary: 336713, url: 'assets/img/อุปกรณ์แต่ง/เบาะทรง Greentea ราคา 5,500 บาท.png', },
    { name: 'ปลอกแฮนด์ เดโทน่า', stock: 68, price: 850, category: 'อุปกรณ์ตกแต่ง', primary: 336714, url: 'assets/img/อุปกรณ์แต่ง/ปลอกแฮนด์ เดโทน่า ราคา 850 บาท.png', },
    { name: 'ผ้าเบรค เดโทน่า', stock: 25, price: 170, category: 'อุปกรณ์ตกแต่ง', primary: 336715, url: 'assets/img/อุปกรณ์แต่ง/ผ้าเบรค เดโทน่า ราคา 170 บาท.png', },
    { name: 'ไฟหน้า MACHAL', stock: 50, price: 4500, category: 'อุปกรณ์ตกแต่ง', primary: 336716, url: 'assets/img/อุปกรณ์แต่ง/ไฟหน้า MACHAL ราคา 4500 บาท.png', },
    { name: 'สายทวินออยเลี้ยงวาล์วแต่ง', stock: 54, price: 1200, category: 'อุปกรณ์ตกแต่ง', primary: 336717, url: 'assets/img/อุปกรณ์แต่ง/สายทวินออยเลี้ยงวาล์วแต่ง .png', },
    { name: 'สายน้ำมัน KITACO', stock: 25, price: 400, category: 'อุปกรณ์ตกแต่ง', primary: 336718, url: 'assets/img/อุปกรณ์แต่ง/สายน้ำมัน KITACO ราคา 400 บาท.png', },

    { name: 'แบตเตอรี่ LEO 12 โวลต์ 5 แอมป์', stock: 60, price: 375, category: 'แบตเตอร์รี่', primary: 336704, url: 'assets/img/แบตเตอร์รี่/แบตเตอรี่ LEO 12 โวลต์ 5 แอมป์ ราคา 375 บาท.png', },
    { name: 'แบตเตอรี่ RR รุ่น JT2.3L-BS', stock: 60, price: 400, category: 'แบตเตอร์รี่', primary: 336705, url: 'assets/img/แบตเตอร์รี่/แบตเตอรี่ RR รุ่น JT2.3L-BS ราคา 400 บาท.png', },
  ];

  filteredProducts = this.products;

  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  logout() {
    this.navCtrl.navigateRoot('/login');
  }

  fix() {
    this.navCtrl.navigateForward('/tabs/tab2');
  }

  searchProducts() {
    if (this.searchTerm) {
      this.filteredProducts = this.products.filter(product =>
        product.primary.toString().includes(this.searchTerm)
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

  sellItem(product: any) {
    if (product.stock > 0) {
      product.stock--;
      console.log('Item sold! Remaining quantity:', product.stock);

      if (product.stock <= 5) {
        window.alert('สินค้าไกล้หมดแล้ว!');
      }
    } else {
      window.alert('สินค้านี้หมดแล้ว!');
    }
  }
  
  async confirmDelete(product: any) {
    const alert = await this.alertController.create({
      header: 'ลบสินค้า',
      message: 'คุณแน่ใจหรือว่าต้องการลบสินค้านี้',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
        },
        {
          text: 'ยืนยัน',
          handler: () => {
            this.deleteProduct(product);
          }
        }
      ]
    });

    await alert.present();
  }

  deleteProduct(product: any) {
    const index = this.filteredProducts.indexOf(product);
    if (index > -1) {
      this.filteredProducts.splice(index, 1);
      console.log('Product deleted:', product);
    }
  }

  Category(category: string) {
    this.filteredProducts = this.products.filter(product => product.category === category);
  }

}

