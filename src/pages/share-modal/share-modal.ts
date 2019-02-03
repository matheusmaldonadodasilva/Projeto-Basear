import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-share-modal',
  templateUrl: 'share-modal.html'
})
export class ShareModal {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

   close() {
    this.viewCtrl.dismiss(); // This works fine
  }

}
