import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  selectColor= 1;
  colors: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
        this.colors=[{color: '#9fa374'},{color: '#00457c'},{color: '#679146'},{color: '#f58026'}]
  }

  presentCartModal() {
    let modal = this.modalCtrl.create('Cart');
    modal.present();
  }

  activeSelect(index){
    this.selectColor = index;
  }

}