import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  selectImg: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController, public alertCtrl: AlertController) {}
  activeSelect(index){
    this.selectImg = index;
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'confirmation',
      message: 'Thank you ! Your order is being processed.',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {}
        },
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push('ListPage');
          }
        }
      ]
    });
    confirm.present();
  }

}